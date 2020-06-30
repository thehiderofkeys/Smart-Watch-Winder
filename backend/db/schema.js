import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  macAddress: {type: String, unique: true, required: true},
  socketID: {type: String, unique: true, required: true},
  token: {type: String, unique: true},
  tokenExpiry: {type: String},
});

export const Connection = mongoose.model('Connection', connectionSchema);

const winderSettingSchema = new Schema({
  macAddress: {type: String, unique: true, required: true},
  owner: {type: Schema.Types.ObjectId, ref: 'Owner', required: true},
  watchID: {type: String},
  displayName: {type: String, required: true},
  enabled: {type: Boolean, required: true, default: false},
  startTime: {type: String, required: true, default: '00:00'},
  endTime: {type: String, required: true, default: '23:59'},
  tpd: {type: Number, required: true},
  direction: {type: String, required: true, enum: ['Left', 'Right', 'Both'], default: 'Both'},
  totalCount: {type: Number, required: true, default: 0},
  dailyCount: {type: Number, required: true, default: 0},
  lastSpun: {type: Date},
});

export const WinderSetting = mongoose.model('WinderSetting', winderSettingSchema);

const userSchema = new Schema({
  token: Object,
  googleId: {type: String, unique: true, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String},
  email: {type: String, unique: true, required: true},
});

export const User = mongoose.model('User', userSchema);

const brandSchema = new Schema({
  name: {type: String, unique: true, required: true},
});

export const Brand = mongoose.model('Brand', brandSchema);

const manufactureSchema = new Schema({
  name: {type: String, unique: true, required: true},
});

export const Manufature = mongoose.model('Manufature', manufactureSchema);

const watchSchema = new Schema({
  brand: {type: Schema.Types.ObjectId, ref: 'Brand', required: true},
  name: {type: String, required: true},
  serial: {type: String, required: true},
});

export const Watch = mongoose.model('Watch', watchSchema);

const movementSchema = new Schema({
  manufature: {type: Schema.Types.ObjectId, ref: 'Manufature', required: true},
  caliber: {type: String, required: true},
  tpd: {type: Number, required: true},
  direction: {type: String, required: true, enum: ['Left', 'Right', 'Both'], default: 'Both'},
  bph: {type: Number, required: true},
});

export const Movement = mongoose.model('Movement', movementSchema);
