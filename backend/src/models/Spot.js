const mongoose = require('mongoose');

const SpotShema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
 }, {
     toJSON: {
         virtuals: true,
     }
 });

 SpotShema.virtual('thumbnail_url').get(function() {
     return `https://jailsonk8-nkp2.localhost.run/files/${this.thumbnail}`; 
 });

module.exports = mongoose.model('Spot', SpotShema);