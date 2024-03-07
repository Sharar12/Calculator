<?php

namespace App\Http\Controllers;

use App\Models\CalculatorLog;
use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    public function calculate(Request $request)
    {
        $request->validate([
            'expression' => 'required|string',
        ]);

        $expression = $request->input('expression');

        $result = $this->evaluate($expression);

        CalculatorLog::create([
            'expression' => $expression,
            'result' => $result,
        ]);

        return response()->json([
            'expression' => $expression,
            'result' => $result,
        ]);
    }

    private function evaluate(string $expression): string
    {
        $expression = preg_replace('/[^0-9+\-*.\/()]/', '', $expression);

        if (preg_match('/\/\s*0/', $expression)) {
            return 'Error: Division by zero';
        }

        $result = @eval("return $expression;");

        if ($result === false || !is_numeric($result)) {
            return 'Error: Invalid expression';
        }

        return (string) $result;
    }
}