'use strict';

var formApp = angular.module('app',['ngFileUpload']);
formApp.controller('Wish_FormController', [ '$scope', '$window', 'Upload', '$http', function($scope, $window, Upload, $http){
  $scope.formData = {};
  $scope.searchData = {};
  $scope.oki = {};

  $scope.processForm = function() {
    //** Uses jquery to serialize the objects received **//
    //var data = $.param($scope.formData);
    // $http({
    //   method  : 'POST',
    //   url     : '/',
    //   data    : data, //forms user object
    //   headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    // }).then(function(res){
    //   console.log('double okay');
    // });
    //**                                               **//
      $http.post($scope.app.apiURL + 'createForm', $scope.formData).then(function(success)  {
        console.log($scope.formData.file1);
        console.log(success);
        $window.location.href = '/#/thanks';
      });
  }
  $scope.img = function(image, count)  {
    var fileValue = "item"+count+"Image";
    console.log("commonnnnnnn");
    $scope.creds = {
    bucket: 'fizz-production-bucket',
    access_key: 'AKIAIODGSF6U2QTXJWLA',
    secret_key: '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'
    }

// $scope.upload = function() {
  // Configure The S3 Object
  AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
  AWS.config.region = 'us-east-1';
  var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });

  if(image) {
    const awsPath = 'https://s3-ap-southeast-1.amazonaws.com/fizz-production-bucket/test/';
    image.name = makeid() + "wishImage"; 
    function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
    }

    // var params = { Key: '<directory_name>/'+ filename, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256', ACL: 'public-read' };
    var params = { Key: 'test/'+ image.name, ContentType: image.type, Body: image, ServerSideEncryption: 'AES256', ACL: 'public-read' };

    // var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };

    bucket.putObject(params, function(err, data) {
      if(err) {
        // There Was An Error With Your S3 Config
        alert(err.message);
        return false;
      }
      else {
        // Success!
        alert('Upload Done');
        switch(count){
          case 1 :  $scope.formData.item1Image = awsPath+ image.name;
                    break;
          case 2:   $scope.formData.item2Image = awsPath+ image.name;
                    break;
          case 3:   $scope.formData.item3Image = awsPath+ image.name;
                    break;
        }
        // $scope.formData.fileValue = awsPath+ image.name; //saving file as per data of the url uploaded to aws s3
        console.log(data);
      }
    })
    .on('httpUploadProgress',function(progress) {
          // Log Progress Information
          console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
        });
  }
  else {
    // No File Selected
    alert('No File Selected');
  }
// }



  }
}]);
