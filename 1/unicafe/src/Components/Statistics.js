import { Statistic } from './StatisticLine'

const Statistics = (props) => {
 const {good, neutral, bad} = props
 let kaikki = good + neutral + bad
 return (
   <div>
         <h3>statistics</h3>
       <table>
         <tbody>
           <Statistic text = {'good'} value = {good} />
           <Statistic text = {'neutral'} value = {neutral} />
           <Statistic text = {'bad'} value = {bad} />
           <Statistic text = {'all'} value = {kaikki} />
           <Statistic text = {'average'} value = {(good-bad)/kaikki} />
           <Statistic text = {'positive'} value = {String(good/kaikki * 100) + '%'}/>
         </tbody>
       </table>
   </div>
 )
}

export {Statistics}