{{ Form::model($media, ['id'=>'filemanager-edit-form', 'class' =>'']) }}
{{ AdminForm::get($media) }}
<hr>
<button type="submit" class="btn btn-primary btn-block">
	<i class="fa fa-save"></i> {{__('admin.label.save')}}
</button>
{{ Form::close() }}
