Ext.define('ImCapture.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.device.Camera'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
             {
                title: 'Camera',
                iconCls: 'action',

                items: [
       /*            {
                            xtype: 'image',
                            id: 'capturedImage',
                            src: 'img/logo.png',
                            height: 200,
                            left: 200,
                            top: 0,
                            width: 300
                    },*/
                    {
                        xtype: 'button',
                        id: 'CameraClick',  
                        ui: 'action',
                        text: 'Camera',
                        //top: 222,
                        /*left: 200,*/
                        padding: 20,
                        handler:function(){
                        	function onFail(){alert('failed to email through phonegap camera api')};
                        	
                        	function onPhotoDataSuccess(imgUri){
                        		var uri=false;
				            	var subject="Message from Compuware Image Capture application";
				            	var toRecipients=['kumarsvinodh@gmail.com'],ccRecipients=[],bccRecipients=[],isHtml=true;
				            	var body="This email is sent from <b>Compuware Image Capture application</b>" +
				            			"</br>Please verify the application";
				            	window.resolveLocalFileSystemURI(imgUri, function(fileEntry) {
window.plugins.emailComposer.showEmailComposer(subject,body,toRecipients,ccRecipients,bccRecipients,isHtml,[fileEntry.fullPath]);
				            	  }, onFail);
                        	};
                        	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                saveToPhotoAlbum: true });
                        }
                    }
                ]
                    
            }
        ]
    }
});
