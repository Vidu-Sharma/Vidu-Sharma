(()=>{function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}window.urlAjaxHandlerCms=_SERVER_PATH+"/admin/api/",window.curItem,window.Cms=function(){function t(e,t){return new Cropper(e,t)}function a(e,t,a){var o=t.getCroppedCanvas(a),i=a.format||"jpeg";i="image/"+i,$("#cropper-data-"+e).val(o.toDataURL(i)),$("#cropper-preview-image-"+e).attr("src",o.toDataURL(i)),$("#cropper-filename-"+e).val(t.uploadedImageName)}function o(e){var t=e.data;$("images"==t?"#simpleGallery":"#simpleDocGallery").load(urlAjaxHandlerCms+"updateHtml/"+t+"/"+_CURMODEL+"/"+$("#itemId").val())}return{init:function(){var e;$('[data-toggle="tooltip"]').tooltip(),jQuery(".popovers").popover(),jQuery(".popovers-show").popover("show"),jQuery(".popovers-hide").popover("hide"),jQuery(".popovers-toggle").popover("toggle"),jQuery(".popovers-destroy").popover("destroy"),jQuery('[data-toggle="buttons-radio"]').button(),$(":input[data-list-value]").on("change",(function(){var e=$(this).val(),t=$(this).data("list-value").split("_"),a=$(this).data("list-name");$(this).is(":checkbox")&&(e=$(this).is(":checked")?1:0),$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+t[0]+"/"+t[1],data:{model:t[0],field:a,value:e},type:"GET",dataType:"json",cache:!1,success:function(e){$.notify(e.message,"success")},error:function(e,t,a){$.notify("Something went Wrong please"+e.responseText+a)}})})),$("[data-list-boolean]").on("click",(function(){var e=$(this).data("list-boolean").split("_"),t=$(this).data("list-name"),a=$(this).find(".bool-on"),o=$(this).find(".bool-off"),i=a.hasClass("d-none")?1:0;$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+e[0]+"/"+e[1],data:{model:e[0],field:t,value:i},type:"GET",dataType:"json",cache:!1,success:function(e){a.toggleClass("d-none"),o.toggleClass("d-none"),$.notify(e.message,"success")},error:function(e,t,a){$.notify("Something went Wrong please"+e.responseText+a)}})})),$('[data-role="delete-item"]').on("click",(function(e){e.preventDefault();var t=this;bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",(function(e){e&&(location.href=t.href)}))})),$('input[type="checkbox"].custom-control-input').on("change",(function(){$("input.custom-control-input:checked").length>0?$("#toolbar_deleteButtonHandler").stop().fadeIn():$("#toolbar_deleteButtonHandler").stop().fadeOut()})),$("#toolbar_editButtonHandler").on("click",(function(e){e.preventDefault(),location.href=$("#row_"+curItem+' [data-role="edit-item"] ')[0].href})),$("#toolbar_deleteButtonHandler").on("click",(function(e){e.preventDefault(),bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",(function(e){e&&($('input[type="checkbox"].custom-control-input:checked').each((function(){$("#row_"+$(this).val()).fadeOut("1000"),deleteUrl=$("#row_"+$(this).val()+' [data-role="delete-item"] ')[0].href,curModel=_CURMODEL,$.ajax({url:urlAjaxHandlerCms+"delete/"+curModel+"/"+$(this).val(),type:"GET",dataType:"json",cache:!1,error:function(e,t,a){$.notify("Something went Wrong please"+e.responseText+a)}})})),$.notify("Selected items have been deleted"))}))})),jQuery("div.flash").not(".alert-important").delay(1500).slideUp(),jQuery(".list-toggle").on("click",(function(){jQuery(this).toggleClass("active")})),$("#sidebar").on("click",(function(e){e.stopPropagation()})),$("html, body").on("click",(function(){$("#sidebar").removeClass("open")})),e=$("header").outerHeight()+30,document.addEventListener("invalid",(function(t){$(t.target).addClass("invalid"),$("html, body").animate({scrollTop:$($(".invalid")[0]).offset().top-e},0)}),!0),document.addEventListener("change",(function(e){$(e.target).removeClass("invalid")}),!0)},initDatePicker:function(){$(".datepicker").datepicker({dateFormat:"dd-mm-yy"})},initUploadifiveSingle:function(){$(".file_upload_single").each((function(){var e=$(this);e.uploadifive({auto:!0,queueID:"queue_"+e.data("key"),uploadScript:urlAjaxHandlerCms+"uploadifiveSingle",onAddQueueItem:function(){this.data("uploadifive").settings.formData={timestamp:"1451682058",token:"4b9fe8f26d865150e4b26b2a839d4f2b",Id:$("#itemId").val(),myImgType:$("#myImgType").val(),model:_CURMODEL,key:e.data("key"),_token:$("[name=_token]").val()}},onUploadComplete:function(t,a){var o=jQuery.parseJSON(a).filename;$('[name="'+e.data("key")+'"]').val(o)}})}))},initUploadifiveMedia:function(){var e=$("#file_upload_media");e.uploadifive({auto:!0,queueID:"queue_media",uploadScript:urlAjaxHandlerCms+"uploadifiveMedia",onAddQueueItem:function(){this.data("uploadifive").settings.formData={timestamp:"1451682058",token:"4b9fe8f26d865150e4b26b2a839d4f2b",Id:$("#itemId").val(),myImgType:$("#myImgType").val(),model:_CURMODEL,key:e.data("key"),_token:$("[name=_token]").val()}},onUploadComplete:function(e,t){var a=jQuery.parseJSON(t);if("ko"==a.status){alert(a.error);var i='<span style ="color:red"> '.concat(a.error,"</span>");$(".fileinfo").html(i)}else o(a)}})},initTinymce:function(){var t;tinymce.init((e(t={selector:"textarea.wyswyg",plugins:["advlist autolink lists link image charmap print preview anchor textcolor colorpicker","searchreplace visualblocks code fullscreen","insertdatetime media table contextmenu paste hr pagebreak help wordcount"],pagebreak_split_block:!0,branding:!1,file_picker_types:"image",images_upload_url:"/admin/api/upload-media-tinymce",images_upload_base_path:"/media/images/tinymce",convert_urls:!1,height:200,toolbar:"insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link | code | pagebreak"},"convert_urls",!1),e(t,"allow_unsafe_link_target",!0),e(t,"images_upload_handler",(function(e,t,a){var o,i;(o=new XMLHttpRequest).withCredentials=!1,o.open("POST","/admin/api/upload-media-tinymce"),o.onload=function(){var e;200==o.status?(e=JSON.parse(o.responseText))&&"string"==typeof e.location?t(e.location):a("Invalid JSON: "+o.responseText):a("HTTP Error: "+o.status)},(i=new FormData).append("file",e.blob(),e.filename()),i.append("_token",$('meta[name="csrf-token"]').attr("content")),o.send(i)})),t))},initColorPicker:function(){$(".color-picker").colorpicker({format:"hex"})},initFiles:function(){$(".form-file").find('input[type="file"]').each((function(){var e=$(this),t=e.siblings("label").first();e.on("change",(function(){Cms.updateFile(e,t)})),e.on("focus",(function(){e.addClass("has-focus")})),e.on("blur",(function(){e.removeClass("has-focus")}))}))},updateFile:function(e,t){var a="";files=e[0].files,(a=files&&files.length>1?(e.data("selected-caption")||"").replace("{count}",files.length):e.val().split("\\").pop())?t.html(a):t.html(e.data("empty-caption"))},initSortableList:function(e){$(e).sortable({revert:!0,items:"li:not(.sort-disabled)",update:function(){var t=$(e).sortable("serialize");$("#info").load(urlAjaxHandlerCms+"updateMediaSortList?"+t)}}),$("ul#simpleGallery").disableSelection()},initImageRelationList:function(){$("[data-image-relation]").on("click",(function(){var e=$(this).data("image-relation"),t=$(this).data("image-id");$("#"+e).val(t),$('[data-image-relation="'+e+'"]').each((function(){$(this).removeClass("active"),$(this).addClass("inactive")})),$(this).addClass("active")}))},initMediaModal:function(){$(document).on("submit","#media-edit-form",(function(e){e.preventDefault();var t=$(this).serializeArray(),a={};$.each(t,(function(e,t){a[t.name]=t.value})),$("#media_category_id option:selected").val()?media_category_title=$("#media_category_id option:selected").text():media_category_title="",$.ajax({type:"POST",dataType:"json",url:$(this).attr("action"),data:$(this).serialize(),success:function(e){var t='<div class="alert alert-info"><ul>';t+="<li>".concat(e.status,"</li>"),t+="</ul></div>",$("#errorBox").html(t),$(".modal-body").animate({scrollTop:0},200);var o="#box_media_"+a.id;$(o+" .media-title").text(a.title),$(o+" .media-category").text(media_category_title)},error:function(e){var t=e.responseJSON,a='<div class="alert alert-danger"><ul>';$.each(t.errors,(function(e,t){a+="<li>".concat(t,"</li>")})),a+="</ul></div>",$("#errorBox").html(a),$(".modal-body").animate({scrollTop:0},200)}})}))},initDateTimePicker:function(){$(".datetimepicker").datetimepicker({controlType:"select",oneLine:!0,dateFormat:"dd-mm-yy",timeFormat:"HH:mm:ss",hourMin:6,hourMax:22})},deleteImages:function(e){bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",(function(t){var a=e.id.split("-"),o=a[1],i=$("#box_"+a[1]+"_"+a[2]),n=$(e).data("locale");t&&$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+_CURMODEL+"/"+a[2],data:{model:_CURMODEL,field:o,value:"",locale:n},type:"GET",dataType:"json",cache:!1,success:function(e){$("input[name="+a[1]+"]").val(""),$.notify(e.message,"success"),i.hide()},error:function(e,t,a){$.notify("Something went Wrong please"+e.responseText+a)}})}))},deleteItem:function(e){bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",(function(t){var a=e.id.split("_"),o=$("#box_"+a[1]+"_"+a[2]);t&&$.ajax({url:urlAjaxHandlerCms+"delete/"+a[1]+"/"+a[2],type:"GET",dataType:"json",cache:!1,success:function(e){$.notify(e.message,"success"),o.hide()},error:function(e,t,a){$.notify("Something went Wrong please"+e.responseText+a)}})}))},initCropper:function(e,i,n){var l=document.getElementById("cropper-container-"+e),r=t(l,i);$("#cropper-upload-"+e).on("change",(function(){var a=this.files;if(r&&a&&a.length){var o=a[0];/^image\/(png|jpeg|gif)/.test(o.type)?(r.uploadedImageURL&&URL.revokeObjectURL(r.uploadedImageURL),$("#cropper-toolbar-"+e).addClass("visible"),l.src=URL.createObjectURL(o),r.destroy(),(r=t(l,i)).uploadedImageType=o.type,r.uploadedImageName=o.name,r.uploadedImageURL=l.src):window.alert("Please choose an image file.")}else $("#cropper-toolbar-"+e).removeClass("visible")})),$("#cropper-zoom-in-"+e).on("click",(function(t){t.preventDefault(),r&&(r.zoom(.1),setTimeout((function(){a(e,r,n)}),100))})),$("#cropper-zoom-out-"+e).on("click",(function(t){t.preventDefault(),r&&(r.zoom(-.1),setTimeout((function(){a(e,r,n)}),100))})),$("#cropper-save-"+e).on("click",(function(t){t.preventDefault(),r&&(a(e,r,n),$.ajax({url:urlAjaxHandlerCms+"cropperMedia",type:"POST",data:{id:$("#itemId").val(),image:$("#cropper-data-"+e).val(),filename:$("#cropper-filename-"+e).val(),myImgType:$("#myImgType").val(),model:_CURMODEL,_token:$('meta[name="csrf-token"]').attr("content")}}).done((function(t){o(t),r.destroy(),l.src="",$("#cropper-upload-"+e).val("").trigger("change")})).fail((function(e,t,a){$.notify("Something went Wrong please"+e.responseText+a)})))})),l.addEventListener("cropend",(function(){a(e,r,n)})),l.addEventListener("ready",(function(){a(e,r,n)}))}}}()})();