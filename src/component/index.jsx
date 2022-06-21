import React,{ useState } from 'react';


function App() {

  let appName = "React Converter";
  let [usdValue,setUsdValue] = useState(0);
  let [rialValue,setRialValue] = useState(0);
  let [usdValueInput,SetUsdValueInput] = useState('');
 

  const fetchPrice = () => {
    fetch('https://api.tgju.online/v1/data/sana/json')
    .then(result=>{
      return result.json();
    })
    .then(data=>{
      // find usd among all items
      let usdItem = data.sana.data.find(i => i.slug === 'sana_buy_usd');
      let usd = parseInt(usdItem.p);
 

      setUsdValue(usd);
      setRialValue(parseInt(usdValueInput | 0) * usd);
    })
    .catch(err=>{
      console.log(err);
    })
  }
 

return (
    <div>
        "shaghayegh"
    </div>
);
}