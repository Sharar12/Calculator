<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CalculatorLog extends Model
{
    protected $table = 'calculator_logs';

    protected $fillable = [
        'expression',
        'result',
    ];
}