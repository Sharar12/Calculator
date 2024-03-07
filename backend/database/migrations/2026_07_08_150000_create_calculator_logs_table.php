<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('forms');

        Schema::create('calculator_logs', function (Blueprint $table) {
            $table->id();
            $table->string('expression');
            $table->string('result');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('calculator_logs');
    }
};