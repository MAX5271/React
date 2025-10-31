import { useState } from "react"
import { BillAmount } from "./BillAmount";
import { Satisfaction } from "./Satisfaction";
import { TotalAmount } from "./TotalAmount";

export default function App(){

  const [bill,setBill] = useState(0);
  const [s1,setS1] = useState(0);
  const [s2,setS2] = useState(0);

  const handleBill = (amount)=>{
    setBill(amount);
  }

  const handleS1 = (amount)=>{
    setS1(amount);
  }
  
  const handleS2 = (amount)=>{
    setS2(amount);
  }

  const handleReset = ()=>{
    setS1(0);
    setS2(0);
    setBill(0);
  }

  return <div>
    <BillAmount amount={bill} onHandleBill={handleBill} />
    <Satisfaction amount={s1} onHandleS={handleS1} ><span>How did you like our service? </span></Satisfaction>
    <Satisfaction amount={s2} onHandleS={handleS2} ><span>How did your friend like our service? </span></Satisfaction>
    <TotalAmount amount={{s1:s1,s2:s2,bill:bill}} onHandleReset={handleReset}/>
  </div>
}

