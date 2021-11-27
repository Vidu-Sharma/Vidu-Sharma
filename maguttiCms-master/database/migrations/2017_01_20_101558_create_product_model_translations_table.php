<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateProductModelTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_model_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('product_model_id');
            $table->string('locale', 255);
            $table->string('title', 255);
            $table->text('description');
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('update_by');
            $table->timestamps();
            $table->unique(['product_model_id', 'locale'], 'product_model_translations_product_model_id_locale_unique');
            $table->index('locale', 'product_model_translations_locale_index');

            $table->foreign('product_model_id', 'product_model_translations_product_model_id_foreign')->references('id')->on('product_models')->onDelete('CASCADE
')->onUpdate('RESTRICT');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_model_translations');
    }
}