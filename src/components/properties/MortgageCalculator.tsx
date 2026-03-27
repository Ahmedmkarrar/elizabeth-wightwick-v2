'use client';

import { useState } from 'react';
import { CalculatorIcon } from '@heroicons/react/24/outline';

export default function MortgageCalculator({ price }: { price: number }) {
  const [deposit, setDeposit] = useState(25);
  const [rate, setRate] = useState(4.5);
  const [term, setTerm] = useState(25);

  const loanAmount = price * (1 - deposit / 100);
  const monthlyRate = rate / 100 / 12;
  const payments = term * 12;
  const monthly =
    monthlyRate === 0
      ? loanAmount / payments
      : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, payments))) /
        (Math.pow(1 + monthlyRate, payments) - 1);

  return (
    <div className="bg-beige/30 p-6 border border-beige/50">
      <div className="flex items-center gap-2 mb-4">
        <CalculatorIcon className="w-4 h-4 text-brand" />
        <p className="text-[11px] font-inter font-medium uppercase tracking-widest text-brand">
          Mortgage Calculator
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-[11px] font-inter text-slate">Deposit</label>
            <span className="text-[12px] font-inter text-charcoal font-medium">{deposit}%</span>
          </div>
          <input
            type="range"
            min={5}
            max={50}
            step={5}
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full accent-brand h-1 cursor-pointer"
          />
          <p className="text-[11px] font-inter text-slate/60 mt-1">
            £{Math.round(price * deposit / 100).toLocaleString()} deposit
          </p>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <label className="text-[11px] font-inter text-slate">Interest Rate</label>
            <span className="text-[12px] font-inter text-charcoal font-medium">{rate}%</span>
          </div>
          <input
            type="range"
            min={2}
            max={8}
            step={0.25}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-brand h-1 cursor-pointer"
          />
        </div>

        <div className="bg-white p-4 text-center border border-beige/30">
          <p className="text-[11px] font-inter uppercase tracking-widest text-slate/60 mb-1">
            Est. Monthly Payment
          </p>
          <p className="font-cormorant text-[2rem] text-brand leading-none">
            £{Math.round(monthly).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
