const fs = require('fs');

function analyzeLog(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    let errorCount = 0;
    let warningCount = 0;
    let infoCount = 0;

    const errorMessages = {};

    lines.forEach(line => {
        if (line.includes('ERROR')) {
            errorCount++;
            const errorMessage = line.split('ERROR:')[1].trim();
            errorMessages[errorMessage] = (errorMessages[errorMessage] || 0) + 1;
        } else if (line.includes('WARNING')) {
            warningCount++;
        } else if (line.includes('INFO')) {
            infoCount++;
        }
    });
    return {
        totalLines: lines.length,
        errorCount,
        warningCount,
        infoCount,
        topErrors: Object.entries(errorMessages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
    };
}

module.exports = { analyzeLog };