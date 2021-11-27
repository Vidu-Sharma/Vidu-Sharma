<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id('id');
            $table->string('domain', 255);
            $table->string('slug', 255)->nullable();
            $table->date('date');
            $table->date('date_start')->nullable();
            $table->integer('image_media_id')->nullable();
            $table->string('title', 255)->nullable();
            $table->text('description')->nullable();;
            $table->string('abstract', 255)->nullable();
            $table->string('image', 255)->nullable();
            $table->string('doc', 255)->nullable();
            $table->text('video')->comment('Video list separated by ;');
            $table->string('link', 255)->nullable();
            $table->integer('sort')->nullable();;
            $table->boolean('pub')->nullable()->default(1);
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}
