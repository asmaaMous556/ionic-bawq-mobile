export interface DeviceSpecsDesc {
  code: string;
  name: string;
  desc: string;
}

export interface ClientDevice {
  _id?: number;
  client?: string;
  specs?: SupportedDevice;
  name?: string;
  desc?: string;
  sim?: ClientDeviceSim;
  imei?: string;
  group?: DevicesGroup;
  password?: string;
  type?: string;
  icon?: ClientDeviceIcon;
  identifier?: string;
  lastRow?: LastRow;
  createdBy?: string;
  createdAt?: number;
  deletedAt?: number;
  isOnline?: boolean;
  active?: boolean;
  messages?: string[];
  unReadMessages?: string[];
  markerOptions?: any;
  liveStatus?: DeviceLiveStatus;
}

export interface SupportedDevice {
  name: string;
  brand: string;
  features: [DeviceSpecsDesc];
  protocol: string;
  userAvailableCommands: [DeviceSpecsDesc];
  img: string;
  code: string;
  accessories: [string];
  imeiRequired: boolean;
  apnRequired: boolean;
}

export interface ClientDeviceSim {
  apn: string;
  username: string;
  password: string;
}

export interface DevicesGroups {
  [key: string]: ClientDevice[];
}

export interface ClientDeviceIcon {
  path: string;
  color: string;
}

export interface DevicesGroup {
  name: string;
  _id: string;
}

export interface DeviceLiveStatus {
  statusSince: number;
}

export interface LastRow {
  temperature?: number;
  speed?: number;
  ignition?: boolean;
  time?: string;
  directionAngle?: string;
  digitalInputs?: boolean[];
  mileage?: number;
  voltage?: number;
  status?: string;
  type?: string;
  alarms?: string[];
  // location?: google.maps.LatLngLiteral;
  logo?: any;
  // mappedLocation?: google.maps.LatLngLiteral;
  oilResistance?: number;
  antiTheftStatus?: boolean;
  permitted?: boolean;
  name?: string;
  rfid: string;
}

export interface GetManyClientDevicesOutput {
  clientDevices: ClientDevice[];
}

export interface GqlOutput<T> {
  output: T;
}
