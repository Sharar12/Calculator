'use client';
import { useState } from 'react';

export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [history, setHistory] = useState('');

    const handleClick = (value: string) => {
        if (value === 'C') {
            setDisplay('0');
            setHistory('');
            return;
        }

        if (value === '=') {
            calculate();
            return;
        }

        setDisplay((prev) => (prev === '0' && value !== '.' ? value : prev + value));
    };

    const calculate = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/calculate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ expression: display }),
            });

            if (res.ok) {
                const data = await res.json();
                setHistory(display + ' =');
                setDisplay(data.result);
            } else {
                setDisplay('Error');
            }
        } catch {
            setDisplay('Error');
        }
    };

    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+'],
        ['C'],
    ];

    return (
        <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-72">
            <div className="bg-gray-800 p-4 rounded-xl mb-4 text-right">
                <div className="text-gray-400 text-sm min-h-5">{history}</div>
                <div className="text-white text-3xl font-bold truncate">{display}</div>
            </div>
            <div className="grid gap-2">
                {buttons.map((row, i) => (
                    <div key={i} className="flex gap-2 justify-center">
                        {row.map((btn) => (
                            <button
                                key={btn}
                                onClick={() => handleClick(btn)}
                                className={`w-14 h-14 rounded-xl text-xl font-bold transition-colors ${
                                    btn === '='
                                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                                        : btn === 'C'
                                          ? 'bg-red-600 hover:bg-red-500 text-white col-span-4 w-full'
                                          : ['+', '-', '*', '/'].includes(btn)
                                            ? 'bg-orange-600 hover:bg-orange-500 text-white'
                                            : 'bg-gray-700 hover:bg-gray-600 text-white'
                                }`}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}