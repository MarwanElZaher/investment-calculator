import { calculateInvestmentResults,formatter } from "../util/investment"

const Results = ({ userInput }) => {
    const results = calculateInvestmentResults(userInput);
    console.log(results, "results")
    const initialInvestment = results[0]?.valueEndOfYear - results[0]?.interest - results[0]?.annualInvestment;
    
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Values</th>
                    <th>Interest earned (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capitals</th>
                </tr>
              
            </thead>
            <tbody>{results.map((yearResult) => {
                const totalInterest = ((yearResult.valueEndOfYear - yearResult.annualInvestment) * yearResult.year) - initialInvestment
                const totalAmountInvested = yearResult?.valueEndOfYear-totalInterest
                return <tr key={yearResult.year}>
                    <td>{yearResult.year}</td>
                    <td>{formatter.format(yearResult.valueEndOfYear)}</td>
                    <td>{formatter.format(yearResult.interest)}</td>   
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                   
                    
                </tr>}
                
            )}
            </tbody>
        </table>)
}
export default Results