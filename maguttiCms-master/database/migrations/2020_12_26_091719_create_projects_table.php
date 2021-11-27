<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('category_id')->nullable();
            $table->string('title', 255);
            $table->string('subtitle', 255)->nullable();
            $table->text('description')->nullable();
            $table->string('permalink', 255)->nullable();
            $table->string('slug', 255)->nullable();
            $table->string('image', 255)->nullable();
            $table->string('doc', 255)->nullable();
            $table->string('video', 255)->nullable();
            $table->integer('sort')->nullable();

            $table->string('seo_title', 255)->nullable();
            $table->string('seo_description', 255)->nullable();
            $table->string('seo_keywords', 255)->nullable();
            $table->string('seo_no_index', 255)->nullable();
            $table->integer('created_by');
            $table->timestamps();
            $table->unique('slug', 'projects_slug_unique');
        });

        Schema::create('project_translations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('locale', 255);
            $table->string('title', 255)->nullable();
            $table->string('subtitle', 255)->nullable();
            $table->string('permalink', 255)->nullable();
            $table->text('description')->nullable();
            $table->string('doc', 255)->nullable();
            $table->string('slug', 255)->nullable();
            $table->string('seo_title', 255)->nullable();
            $table->string('seo_description', 255)->nullable();
            $table->string('seo_keywords', 255)->nullable();
            $table->string('seo_no_index', 255)->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('update_by');
            $table->timestamps();


            $table->unique(['project_id', 'locale'], 'projects_translations_project_id_locale_unique');
            $table->index('locale', 'projects_translations_locale_index');

            $table->foreignId('project_id')
                  ->constrained()
                  ->onDelete('CASCADE')
                  ->onUpdate('RESTRICT');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}