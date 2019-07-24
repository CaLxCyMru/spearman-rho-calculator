// https://www.npmjs.com/package/spearman-rho
const SpearmanRHO = require('spearman-rho');

// Define the witness mean which will be used as Data Set 1 during rank correlation calculation
const witnessMean = [
    5.0,
    5.0,
    4.0,
    6.0,
    6.0,
    6.0,
    5.5,
    6.0,
    6.0,
    7.0,
    5.0,
    5.0,
    5.0,
    6.0,
    5.0,
    5.0,
    5.0,
    5.0,
    6.5,
    6.0,
    3.0,
    5.0,
    4.0,
    6.0,
]

// Define the feedback mean which will be used as Data Set 2 during rank correlation calculation
const feedbackMean = [
    1.5,
    4.8,
    2.5,
    4.9,
    3.6,
    3.2,
    4.6,
    4.4,
    3.2,
    3.2,
    3.4,
    1.4,
    2.5,
    3.8,
    2.9,
    3.9,
    4.2,
    1.9,
    5.1,
    3.6,
    1.8,
    3.6,
    3.8,
    3.7,
]

/** 
 * Uses the `SpearmanRHO` library to calculate the Spearman's rank correlation coefficient
 * 
 * @param {number[]} x Data set 1 
 * @param {number[]} y Data set 2
 * @returns {Promise<number>} Spearman's rank correlation for the two data sets
 */
const calculate = async (x, y) => {
    // Create a new instance of the `SpearmanRHO` library passing in our two data sets
    const spearmanRHO = new SpearmanRHO(x, y);
    // Run the calculation and return the result
    return await spearmanRHO.calc();
}

/**
 * Used to run the application
 */
const run = async () => {
    // Call the `calculate` function with the `witnessMean` and `feedbackMean` Data Sets
    const spearmanRankCorrelation = await calculate(witnessMean, feedbackMean);

    // Print the above result out to the console for viewing
    console.log(spearmanRankCorrelation);
}

/**
 * Runs the application
 * 
 * Spearman's rank correlation: 0.4001514784006241
 */
run();