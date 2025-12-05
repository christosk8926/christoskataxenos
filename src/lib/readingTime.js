/**
 * Υπολογισμός χρόνου ανάγνωσης για blog post
 * Calculate reading time for blog post
 * 
 * @param {string} content - The MDX/text content
 * @returns {number} - Estimated reading time in minutes
 */
export function calculateReadingTime(content) {
    // Αφαιρούμε MDX components και frontmatter
    // Remove MDX components and frontmatter
    const cleanedContent = content
        .replace(/---[\s\S]*?---/g, '') // Remove frontmatter
        .replace(/<[^>]+>/g, '') // Remove HTML/JSX tags
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks (count separately)
        .replace(/`[^`]+`/g, '') // Remove inline code
        .trim();

    // Μέτρηση λέξεων
    // Word count
    const words = cleanedContent.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Μέσος όρος ανάγνωσης: 200-250 λέξεις/λεπτό
    // Average reading speed: 200-250 words per minute
    // Χρησιμοποιούμε 225 ως μέσο όρο
    const wordsPerMinute = 225;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    // Ελάχιστος χρόνος 1 λεπτό
    // Minimum 1 minute
    return Math.max(1, readingTime);
}

/**
 * Μορφοποίηση του χρόνου ανάγνωσης
 * Format reading time for display
 * 
 * @param {number} minutes - Reading time in minutes
 * @param {string} locale - Language locale ('el' or 'en')
 * @returns {string} - Formatted string
 */
export function formatReadingTime(minutes, locale = 'el') {
    if (locale === 'en') {
        return `${minutes} min read`;
    }
    // Greek
    return `${minutes} λεπτά ανάγνωσης`;
}
