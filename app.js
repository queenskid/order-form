'use strict';

function Photo(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.views = 0;
  this.votes = 0;
  Photo.allPhotos.push(this);
};
