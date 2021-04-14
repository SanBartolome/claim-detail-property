import { PhotoDetail } from './photo-detail.model';

export interface Claim {
  id: string;
  date: string;
  time: string;
  weather: string;
  gpsPrecision: string;
  photos: PhotoDetail[];
  latitude: number;
  longitude: number;
}
