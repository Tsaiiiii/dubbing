const videoFiles = {
    // "Lesson 10": {
    //     "src": "mp4/video10.mp4",
    //     "audioSrc": "wav/10_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/10_A.vtt",
    //         "Ashley": "subtitles/10_B.vtt",
    //         "default": "subtitles/10_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 1.27 , "end": 14.215 },
    //             { "start": 18.63 , "end": 22.93 },
    //             { "start": 25.87 , "end": 33.42 },
    //             { "start": 40.44 , "end": 43.896 },
    //             { "start": 46.008 , "end": 46.976 },
    //             { "start": 51.82 , "end": 56.376 },
    //             { "start": 60.496 , "end": 62.58 },
    //             { "start": 65.15 , "end": 71.349 },
    //             { "start": 74.53 , "end": 78.828 }
    //         ],
    //         "Ashley": [
    //             { "start": 14.368 , "end": 18.964 },
    //             { "start": 23.23 , "end": 25.74 },
    //             { "start": 33.84 , "end": 39.58 },
    //             { "start": 44.048 , "end": 45.816 },
    //             { "start": 47.048 , "end": 51.857 },
    //             { "start": 56.692 , "end": 60.075 },
    //             { "start": 62.761 , "end": 65.045 },
    //             { "start": 71.921 , "end": 74.145 },
    //             { "start": 78.8 , "end": 79.522 }
    //         ]
    //     }
    // },
    // "Lesson 11": {
    //     "src": "mp4/video11.mp4",
    //     "audioSrc": "wav/11_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/11_A.vtt",
    //         "Marsha": "subtitles/11_B.vtt",
    //         "default": "subtitles/11_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 0.500 , "end": 16.725 },
    //             { "start": 20.577 , "end": 21.161 },
    //             { "start": 24.505 , "end": 27.605 },
    //             { "start": 34.226 , "end": 44.165 },
    //             { "start": 51.500 , "end": 63.015 },
    //             { "start": 64.599 , "end": 67.431 },
    //             { "start": 70.095 , "end": 82.577 },
    //             { "start": 85.457 , "end": 89.505 },
    //             { "start": 92.265 , "end": 100.685 },
    //             { "start": 107.545 , "end": 108.485 },
    //             { "start": 113.785 , "end": 123.585 }
    //         ],
    //         "Marsha": [
    //             { "start": 17.065 , "end": 20.449 },
    //             { "start": 21.273 , "end": 22.165 },
    //             { "start": 30.025 , "end": 33.566 },
    //             { "start": 44.745 , "end": 51.697 },
    //             { "start": 63.095 , "end": 64.423 },
    //             { "start": 67.623 , "end": 69.475 },
    //             { "start": 82.761 , "end": 85.329 },
    //             { "start": 89.625 , "end": 91.325 },
    //             { "start": 105.585 , "end": 107.205 },
    //             { "start": 109.705 , "end": 110.885 }
    //         ]
    //     }
    // },
    // "Lesson 16": {
    //     "src": "mp4/video16.mp4",
    //     "audioSrc": "wav/16_wav.wav",
    //     "subtitlesSrc": {
    //         "Interviewer": "subtitles/16_A.vtt",
    //         "Interviewee": "subtitles/16_B.vtt",
    //         "default": "subtitles/16_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Interviewer": [
    //             { "start": 2 , "end": 27.531 },
    //             { "start": 29.010 , "end": 31.495 },
    //             { "start": 33.860 , "end": 35.939 },
    //             { "start": 37.600 , "end": 40.195 },
    //             { "start": 44.915 , "end": 47.411 },
    //             { "start": 51.290 , "end": 54.794 },
    //             { "start": 67.460 , "end": 77.145 },
    //             { "start": 87.845 , "end": 91.421 },
    //             { "start": 93.440 , "end": 105.835 },
    //             { "start": 108.135 , "end": 110.395 },
    //             { "start": 112.367 , "end": 114.991 },
    //             { "start": 118.167 , "end": 120.183 },
    //             { "start": 122.935 , "end": 126.103 },
    //             { "start": 130.670 , "end": 132.935 },
    //             { "start": 135.035 , "end": 137.107 },
    //             { "start": 140.475 , "end": 152.755 },
    //             { "start": 154.035 , "end": 156.707 },
    //             { "start": 160.860 , "end": 164.695 },
    //             { "start": 166.460 , "end": 170.74 },
    //             { "start": 175.451 , "end": 177.963 },
    //             { "start": 181.270 , "end": 183.327 },
    //             { "start": 183.990 , "end": 184.783 },
    //             { "start": 188.295 , "end": 214.863 }
    //         ],
    //         "Interviewee": [
    //             { "start": 27.460 , "end": 29.055 },
    //             { "start": 31.835 , "end": 33.335 },
    //             { "start": 36.107 , "end": 37.739 },
    //             { "start": 40.355 , "end": 44.175 },
    //             { "start": 47.603 , "end": 50.655 },
    //             { "start": 54.826 , "end": 66.785 },
    //             { "start": 77.845 , "end": 87.065 },
    //             { "start": 91.573 , "end": 92.745 },
    //             { "start": 106.430 , "end": 107.435 },
    //             { "start": 110.370 , "end": 112.199 },
    //             { "start": 115.030 , "end": 117.999 },
    //             { "start": 120.070 , "end": 122.315 },
    //             { "start": 126.239 , "end": 130.131 },
    //             { "start": 133.395 , "end": 134.695 },
    //             { "start": 137.251 , "end": 139.015 },
    //             { "start": 152.810 , "end": 153.535 },
    //             { "start": 156.891 , "end": 160.947 },
    //             { "start": 165.115 , "end": 166.615 },
    //             { "start": 170.515 , "end": 175.307 },
    //             { "start": 178.139 , "end": 181.251 },
    //             { "start": 183.270 , "end": 184.063 },
    //             { "start": 184.710 , "end": 185.555 }
    //         ]
    //     }
    // },
    // "Lesson 17": {
    //     "src": "mp4/video17.mp4",
    //     "audioSrc": "wav/17_wav.wav",
    //     "subtitlesSrc": {
    //         "Anna": "subtitles/17_A.vtt",
    //         "Marsha": "subtitles/17_B.vtt",
    //         "default": "subtitles/17_practice.vtt"
    //     },
    //     "muteSegments": {
    //         "Anna": [
    //             { "start": 2.057 , "end": 17.969 },
    //             { "start": 20.260 , "end": 22.393 },
    //             { "start": 26.750 , "end": 31.754 },
    //             { "start": 35.550 , "end": 44.497 },
    //             { "start": 47.145 , "end": 52.805 },
    //             { "start": 57.209 , "end": 59.537 },
    //             { "start": 64.889 , "end": 70.265 },
    //             { "start": 72.625 , "end": 75.765 },
    //             { "start": 83.655 , "end": 96.319 },
    //             { "start": 102.410 , "end": 109.445 },
    //             { "start": 111.010 , "end": 114.565 },
    //             { "start": 118.540 , "end": 128.685 },
    //             { "start": 134.480 , "end": 140.315 },
    //             { "start": 145.095 , "end": 153.847 }
    //         ],
    //         "Marsha": [
    //             { "start": 17.920 , "end": 20.385 },
    //             { "start": 22.370 , "end": 26.793 },
    //             { "start": 31.953 , "end": 35.605 },
    //             { "start": 44.601 , "end": 47.025 },
    //             { "start": 52.890 , "end": 57.033 },
    //             { "start": 59.520 , "end": 64.713 },
    //             { "start": 70.230 , "end": 72.245 },
    //             { "start": 76.385 , "end": 83.495 },
    //             { "start": 96.487 , "end": 102.511 },
    //             { "start": 109.825 , "end": 110.985 },
    //             { "start": 115.050 , "end": 118.529 },
    //             { "start": 129.585 , "end": 134.519 },
    //             { "start": 140.775 , "end": 143.875 },
    //         ]
    //     }
    // },
    "Lesson 18": {
        "src": "mp4/video18.mp4",
        "audioSrc": "wav/18_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/18_A.vtt",
            "Caty": "subtitles/18_B.vtt",
            "default": "subtitles/18_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.0 , "end": 13.603 },
                { "start": 22.610 , "end": 24.425 },
                { "start": 28.995 , "end": 29.723 },
                { "start": 35.150 , "end": 53.407 },
                { "start": 62.775 , "end": 63.791 },
                { "start": 66.620 , "end": 71.231 },
                { "start": 77.335 , "end": 97.407 },
                { "start": 102.055 , "end": 104.835 },
                { "start": 111.837 , "end": 125.325 },
                { "start": 132.141 , "end": 138.627 },
                { "start": 142.180 , "end": 168.845 },
                { "start": 175.525 , "end": 176.805 },
                { "start": 178.610 , "end": 179.385 },
                { "start": 188.465 , "end": 191.005 },
                { "start": 198.561 , "end": 219.729 },
                { "start": 226.625 , "end": 233.177 },
                { "start": 241.310 , "end": 246.493 }
            ],
            "Caty": [
                { "start": 13.18 , "end": 22.801 },
                { "start": 24.410 , "end": 26.495 },
                { "start": 29.770 , "end": 32.415 },
                { "start": 53.430 , "end": 62.435 },
                { "start": 63.360 , "end": 66.743 },
                { "start": 71.423 , "end": 74.315 },
                { "start": 97.470 , "end": 100.955 },
                { "start": 105.575 , "end": 111.709 },
                { "start": 125.210 , "end": 131.957 },
                { "start": 138.500 , "end": 141.415 },
                { "start": 168.700 , "end": 175.105 },
                { "start": 176.700 , "end": 178.605 },
                { "start": 179.730 , "end": 187.365 },
                { "start": 193.425 , "end": 198.377 },
                { "start": 219.597 , "end": 226.505 },
                { "start": 233.080 , "end": 240.405 }
            ]
        }
    },
    "Lesson 19": {
        "src": "mp4/video19.mp4",
        "audioSrc": "wav/19_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/19_A.vtt",
            "Caty": "subtitles/19_B.vtt",
            "default": "subtitles/19_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.21 , "end": 27.070 },
                { "start": 30.590 , "end": 32.021 },
                { "start": 37.800 , "end": 51.861 },
                { "start": 58.669 , "end": 62.995 },
                { "start": 68.300 , "end": 72.095 },
                { "start": 78.910 , "end": 83.645 },
                { "start": 91.020 , "end": 99.185 },
                { "start": 115.580 , "end": 119.835 },
                { "start": 131.410 , "end": 140.497 },
                { "start": 145.540 , "end": 152.077 },
                { "start": 152.722 , "end": 154.73 },
                { "start": 160.643 , "end": 178.885 }
            ],
            "Caty": [
                { "start": 26.780 , "end": 30.493 },
                { "start": 31.940 , "end": 38.021 },
                { "start": 52.013 , "end": 58.723 },
                { "start": 62.890 , "end": 67.815 },
                { "start": 72.030 , "end": 77.735 },
                { "start": 83.690 , "end": 90.969 },
                { "start": 99.345 , "end": 114.275 },
                { "start": 120.000 , "end": 130.635 },
                { "start": 140.641 , "end": 145.617 },
                { "start": 152.071 , "end": 152.648 },
                { "start": 154.937 , "end": 161.075 }
            ]
        }
    },
    "Lesson 20": {
        "src": "mp4/video20.mp4",
        "audioSrc": "wav/20_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/20_A.vtt",
            "Pete": "subtitles/20_B.vtt",
            "default": "subtitles/20_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.96 , "end": 23.057 },
                { "start": 24.200 , "end": 29.733 },
                { "start": 31.890 , "end": 38.945 },
                { "start": 42.130 , "end": 44.185 },
                { "start": 47.765 , "end": 50.501 },
                { "start": 52.390 , "end": 56.751 },
                { "start": 58.079 , "end": 62.775 },
                { "start": 65.370 , "end": 67.463 },
                { "start": 70.511 , "end": 72.719 },
                { "start": 78.260 , "end": 88.923 },
                { "start": 91.940 , "end": 94.851 },
                { "start": 100.480 , "end": 104.447 },
                { "start": 107.631 , "end": 115.835 },
                { "start": 118.470 , "end": 122.287 },
                { "start": 132.865 , "end": 134.665 },
                { "start": 136.230 , "end": 138.521 },
                { "start": 141.470 , "end": 146.769 },
                { "start": 149.740 , "end": 154.089 },
                { "start": 175.785 , "end": 187.025 }
            ],
            "Pete": [
                { "start": 23.241 , "end": 24.285 },
                { "start": 29.909 , "end": 31.925 },
                { "start": 39.765 , "end": 41.225 },
                { "start": 43.930 , "end": 47.145 },
                { "start": 50.693 , "end": 52.145 },
                { "start": 56.840 , "end": 57.983 },
                { "start": 62.935 , "end": 65.367 },
                { "start": 67.490 , "end": 70.367 },
                { "start": 72.740 , "end": 78.515 },
                { "start": 88.930 , "end": 92.035 },
                { "start": 94.870 , "end": 100.643 },
                { "start": 104.400 , "end": 107.527 },
                { "start": 115.920 , "end": 118.395 },
                { "start": 122.050 , "end": 132.315 },
                { "start": 134.825 , "end": 136.209 },
                { "start": 138.673 , "end": 141.849 },
                { "start": 146.760 , "end": 149.729 },
                { "start": 154.257 , "end": 159.905 },
                { "start": 161.980 , "end": 165.017 },
                { "start": 166.433 , "end": 169.145 }
            ]
        }
    },
    "Lesson 22": {
        "src": "mp4/video22.mp4",
        "audioSrc": "wav/22_wav.wav",
        "subtitlesSrc": {
            "Anna": "subtitles/22_A.vtt",
            "Amelia": "subtitles/22_B.vtt",
            "default": "subtitles/22_practice.vtt"
        },
        "muteSegments": {
            "Anna": [
                { "start": 0.001 , "end": 35.753 },
                { "start": 40.920 , "end": 44.205 },
                { "start": 48.190 , "end": 50.885 },
                { "start": 52.609 , "end": 58.751 },
                { "start": 61.590 , "end": 68.635 },
                { "start": 71.031 , "end": 75.435 },
                { "start": 77.890 , "end": 84.905 },
                { "start": 86.820 , "end": 94.105 },
                { "start": 99.125 , "end": 115.785 },
                { "start": 120.080 , "end": 126.861 },
                { "start": 130.333 , "end": 140.273 },
                { "start": 147.710 , "end": 153.125 },
                { "start": 156.370 , "end": 161.885 },
                { "start": 164.305 , "end": 173.621 },
                { "start": 177.093 , "end": 179.400 }
            ],
            "Amelia": [
                { "start": 35.889 , "end": 41.125 },
                { "start": 44.545 , "end": 48.225 },
                { "start": 51.185 , "end": 52.473 },
                { "start": 58.943 , "end": 61.703 },
                { "start": 69.015 , "end": 70.887 },
                { "start": 75.855 , "end": 78.035 },
                { "start": 84.870 , "end": 86.885 },
                { "start": 94.485 , "end": 98.745 },
                { "start": 116.125 , "end": 120.285 },
                { "start": 126.810 , "end": 130.141 },
                { "start": 140.449 , "end": 147.793 },
                { "start": 154.265 , "end": 156.329 },
                { "start": 162.265 , "end": 164.005 },
                { "start": 173.650 , "end": 176.901 }
            ]
        }
    }
}