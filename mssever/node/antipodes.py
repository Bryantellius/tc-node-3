#!/usr/bin/env python3

import argparse

class Point:
    def __init__(self, lat, long) -> None:
        if lat < -90 or lat > 90:
            raise ValueError(f'Latitude {lat} is outside the valid range.')
        if long < -180 or long > 180:
            raise ValueError(f'Longitude {long} is outside the valid range.')
        self.lat = lat
        self.long = long

    def antipode(self):
        multiplier = 1 if self.long < 1 else -1
        return Point(self.lat * -1, (180 - abs(self.long)) * multiplier)

    def __eq__(self, other):
        return self.lat == other.lat and self.long == other.long

    def __str__(self) -> str:
        return f'lat: {self.lat}\tlong: {self.long}'

def parse_args() -> argparse.Namespace:
    def latitude(s) -> float:
        n = float(s)
        if -90 <= n <= 90:
            return n
        raise argparse.ArgumentTypeError('out of the valid range')
    
    def longitude(s) -> float:
        n = float(s)
        if -180 <= n <= 180:
            return n
        raise argparse.ArgumentTypeError('out of the valid range')
    
    parser = argparse.ArgumentParser()
    parser.add_argument('latitude', type=latitude)
    parser.add_argument('longitude', type=longitude)
    return parser.parse_args()

def main() -> None:
    args = parse_args()
    source = Point(args.latitude, args.longitude)
    print(f'Source:\t\t{source}\nAntipode:\t{source.antipode()}')

if __name__ == '__main__':
    main()
