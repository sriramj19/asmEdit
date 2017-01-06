'use strict';

var app = angular.module('app', ['ngFileUpload']);

/* Lists Controller */


app.controller('ImagesController',[ '$scope', '$http', 'Upload', function($scope, $http, Upload) {
  $scope.img = function()  {
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

  if($scope.file) {
    const awsPath = 'https://s3-ap-southeast-1.amazonaws.com/fizz-production-bucket/promotion/';

    // var params = { Key: '<directory_name>/'+ filename, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256', ACL: 'public-read' };
    var params = { Key: 'test/'+ $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256', ACL: 'public-read' };

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
        $scope.file = data; //saving file as per data of the url uploaded to aws s3
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
