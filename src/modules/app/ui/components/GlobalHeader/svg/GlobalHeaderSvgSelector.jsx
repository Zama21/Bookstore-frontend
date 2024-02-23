import React from 'react'
import stl from './GlobalHeaderSvgSelector.module.css'

export default function GlobalHeaderSvgSelector({ nameSvg }) {
	switch (nameSvg) {
		// 		case 'logo': {
		// 			return (
		// 				<svg
		// 					className={stl.logo}
		// 					version='1.0'
		// 					xmlns='http://www.w3.org/2000/svg'
		// 					viewBox='0 0 512.000000 512.000000'
		// 					preserveAspectRatio='xMidYMid meet'
		// 				>
		// 					<g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'>
		// 						<path
		// 							className={stl.blue}
		// 							d='M936 5054 c-172 -42 -315 -184 -361 -359 -13 -50 -15 -149 -15 -621
		// 0 -309 3 -570 6 -579 13 -34 70 -38 104 -8 3 3 7 269 10 591 l5 587 28 60 c37
		// 79 114 156 191 192 l61 28 1595 0 1595 0 65 -31 c83 -39 145 -101 184 -184
		// l31 -65 3 -1502 2 -1503 -1632 -2 -1633 -3 -80 -27 c-44 -15 -109 -44 -145
		// -65 -76 -45 -197 -156 -240 -221 l-30 -45 0 891 0 891 -25 20 c-22 16 -31 18
		// -56 9 -16 -6 -31 -19 -34 -31 -3 -12 -4 -551 -3 -1197 3 -1086 5 -1179 21
		// -1234 86 -286 265 -478 532 -568 l70 -23 1605 -3 1604 -2 51 25 c92 44 115 98
		// 115 263 0 98 -3 123 -21 160 -27 56 -87 99 -147 108 -57 8 -102 46 -140 119
		// -36 69 -38 188 -4 253 30 55 90 122 111 122 33 0 118 49 148 84 17 21 35 54
		// 42 75 8 28 11 486 11 1708 0 1836 4 1722 -61 1843 -64 120 -207 226 -338 250
		// -34 6 -613 10 -1610 9 -1308 -1 -1565 -3 -1615 -15z m3504 -3629 c0 -134 -12
		// -168 -65 -191 -29 -12 -267 -14 -1579 -14 -1534 0 -1546 0 -1600 -21 -77 -28
		// -148 -96 -188 -177 -31 -62 -33 -74 -33 -167 0 -93 2 -105 33 -167 40 -81 111
		// -149 188 -177 54 -21 66 -21 1620 -21 l1566 0 29 -29 c28 -29 29 -32 29 -131
		// 0 -99 -1 -102 -29 -131 l-30 -29 -1583 3 c-1755 3 -1612 -3 -1758 68 -99 49
		// -225 179 -278 289 -59 120 -76 194 -76 325 0 188 59 343 179 473 105 113 229
		// 181 364 201 31 5 766 9 1634 10 l1577 1 0 -115z m-299 -397 c-34 -68 -36 -77
		// -36 -173 0 -96 2 -105 36 -173 l35 -72 -1433 0 c-1023 0 -1447 3 -1478 11
		// -122 31 -198 175 -160 304 24 83 87 148 160 166 17 4 678 7 1471 8 l1440 1
		// -35 -72z'
		// 						/>
		// 						<path
		// 							className={stl.bigHeart}
		// 							d='M2200 4190 c-181 -28 -352 -153 -434 -318 -36 -71 -66 -191 -66 -261
		// 1 -159 62 -300 187 -431 l82 -87 -22 -22 c-13 -11 -27 -21 -31 -21 -5 0 -27
		// 16 -49 36 -22 20 -65 48 -96 62 -47 22 -70 27 -146 27 -78 0 -98 -4 -152 -29
		// -73 -34 -153 -113 -186 -183 -18 -39 -22 -66 -22 -148 0 -149 7 -159 304 -458
		// 135 -137 258 -255 273 -263 32 -17 101 -18 131 -3 12 6 131 120 264 252 l242
		// 241 99 -96 c86 -83 108 -99 155 -113 66 -19 114 -13 172 20 22 13 230 214 461
		// 447 416 417 422 424 462 508 70 146 80 302 29 449 -83 238 -301 393 -554 393
		// -168 0 -291 -51 -419 -174 l-84 -81 -68 65 c-37 36 -93 81 -124 101 -111 72
		// -278 107 -408 87z m285 -163 c61 -30 98 -57 180 -137 79 -77 109 -100 130
		// -100 21 0 52 23 129 98 111 105 170 143 261 167 380 99 704 -298 530 -650 -31
		// -64 -71 -107 -457 -492 -509 -509 -448 -476 -604 -320 l-104 102 11 45 c28
		// 116 -16 254 -107 340 -84 80 -126 95 -267 95 l-117 1 -66 64 c-134 131 -180
		// 237 -172 397 3 73 9 100 36 158 60 126 148 206 280 252 57 20 81 23 164 20 86
		// -3 104 -8 173 -40z m-755 -997 c19 -10 55 -39 80 -65 44 -45 87 -75 110 -75 6
		// 0 42 29 79 64 38 36 86 72 108 81 48 20 139 21 184 2 126 -52 183 -200 125
		// -322 -34 -72 -484 -520 -513 -511 -11 3 -126 113 -255 244 -227 228 -237 240
		// -253 296 -21 72 -15 133 20 192 64 109 205 151 315 94z'
		// 						/>

		// 						<path
		// 							className={stl.blue}
		// 							d='M577 3372 c-21 -23 -24 -140 -4 -164 21 -27 52 -30 80 -7 25 18 27
		// 27 27 88 0 53 -4 72 -18 84 -24 22 -65 21 -85 -1z'
		// 						/>
		// 					</g>
		// 				</svg>
		// 			)
		// 		}
		case 'logo': {
			return (
				<svg
					className={stl.logo}
					version='1.0'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512.000000 512.000000'
					preserveAspectRatio='xMidYMid meet'
				>
					<g>
						<path
							className={stl.bookLogo1}
							d='M 60.5,199.5 C 63.1553,200.001 65.322,201.334 67,203.5C 67.4999,215.162 67.6665,226.829 67.5,238.5C 67.3333,286.168 67.5,333.834 68,381.5C 82.1876,358.831 102.688,346.831 129.5,345.5C 234.167,345.5 338.833,345.5 443.5,345.5C 443.667,245.499 443.5,145.499 443,45.5C 438.75,30.2506 428.917,20.7506 413.5,17C 360.833,16.8333 308.167,16.6667 255.5,16.5C 201.456,16.3417 147.456,16.8417 93.5,18C 80.1675,22.6664 71.6675,31.8331 68,45.5C 67.6667,84.1667 67.3333,122.833 67,161.5C 65.322,163.666 63.1553,164.999 60.5,165.5C 57.297,165.318 55.4637,163.652 55,160.5C 54.0492,121.474 54.3825,82.4739 56,43.5C 61.5,23.3333 74.3333,10.5 94.5,5C 201.833,4.33333 309.167,4.33333 416.5,5C 436.667,10.5 449.5,23.3333 455,43.5C 456.15,100.976 456.65,158.476 456.5,216C 456.333,270.833 456.167,325.667 456,380.5C 454.167,393 447,400.167 434.5,402C 417.799,417.392 417.466,433.058 433.5,449C 443.682,449.537 450.848,454.371 455,463.5C 457,473.5 457,483.5 455,493.5C 452.41,499.758 447.91,503.925 441.5,506C 333.833,506.667 226.167,506.667 118.5,506C 83.7273,497.559 62.8939,475.725 56,440.5C 54.3629,361.853 54.0296,283.186 55,204.5C 55.7516,201.579 57.5849,199.913 60.5,199.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo2}
							d='M 129.5,345.5 C 104.708,312.339 84.0412,276.672 67.5,238.5C 67.6665,226.829 67.4999,215.162 67,203.5C 65.322,201.334 63.1553,200.001 60.5,199.5C 60.5,197.5 60.5,195.5 60.5,193.5C 66.4405,192.212 68.7738,188.545 67.5,182.5C 68.7738,176.455 66.4405,172.788 60.5,171.5C 60.5,169.5 60.5,167.5 60.5,165.5C 63.1553,164.999 65.322,163.666 67,161.5C 67.3333,122.833 67.6667,84.1667 68,45.5C 71.6675,31.8331 80.1675,22.6664 93.5,18C 147.456,16.8417 201.456,16.3417 255.5,16.5C 308.167,16.6667 360.833,16.8333 413.5,17C 428.917,20.7506 438.75,30.2506 443,45.5C 443.5,145.499 443.667,245.499 443.5,345.5C 338.833,345.5 234.167,345.5 129.5,345.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo3}
							d='M 216.5,92.5 C 233.583,89.9223 249.25,93.4223 263.5,103C 268.983,107.649 274.316,112.482 279.5,117.5C 284.319,113.182 288.985,108.682 293.5,104C 312.151,91.3552 332.151,89.0219 353.5,97C 384.29,114.103 394.457,139.603 384,173.5C 381.755,178.997 378.755,183.997 375,188.5C 347.833,215.667 320.667,242.833 293.5,270C 283.806,275.956 274.139,275.956 264.5,270C 258.985,264.318 253.319,258.818 247.5,253.5C 231.347,269.153 215.347,284.986 199.5,301C 193.472,304.265 187.472,304.265 181.5,301C 165.333,284.833 149.167,268.667 133,252.5C 121.174,233.489 123.341,216.322 139.5,201C 158.35,189.503 175.517,191.669 191,207.5C 192.833,205.667 194.667,203.833 196.5,202C 172.435,182.478 164.935,157.978 174,128.5C 182.584,109.737 196.751,97.7373 216.5,92.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo4}
							d='M 222.5,103.5 C 236.3,102.823 248.633,106.657 259.5,115C 265.448,121.624 271.948,127.457 279,132.5C 281.032,132.142 282.866,131.308 284.5,130C 290.167,124.333 295.833,118.667 301.5,113C 318.751,102.455 336.417,101.788 354.5,111C 377.558,128.609 382.392,150.442 369,176.5C 341.167,205.667 312.667,234.167 283.5,262C 279.705,262.837 276.039,262.504 272.5,261C 266.667,255.167 260.833,249.333 255,243.5C 259.969,222.044 252.802,206.211 233.5,196C 224.522,193.047 215.522,192.713 206.5,195C 197.439,187.615 190.272,178.782 185,168.5C 176.428,140.478 185.262,119.978 211.5,107C 215.254,105.691 218.921,104.525 222.5,103.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo5}
							d='M 60.5,171.5 C 66.4405,172.788 68.7738,176.455 67.5,182.5C 68.7738,188.545 66.4405,192.212 60.5,193.5C 55.693,191.565 53.693,187.899 54.5,182.5C 53.6749,177.141 55.6749,173.474 60.5,171.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo6}
							d='M 155.5,205.5 C 163.556,204.577 170.889,206.41 177.5,211C 181.171,215.523 185.504,219.023 190.5,221.5C 192.299,221.423 193.966,220.923 195.5,220C 199.964,214.53 205.297,210.197 211.5,207C 225.096,203.714 235.263,208.214 242,220.5C 244.366,228.437 243.7,236.104 240,243.5C 224.167,259.333 208.333,275.167 192.5,291C 191.167,291.667 189.833,291.667 188.5,291C 171.971,274.805 155.804,258.305 140,241.5C 133.959,224.588 139.126,212.588 155.5,205.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo7}
							d='M 67.5,238.5 C 84.0412,276.672 104.708,312.339 129.5,345.5C 102.688,346.831 82.1876,358.831 68,381.5C 67.5,333.834 67.3333,286.168 67.5,238.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo8}
							d='M 139.5,357.5 C 148.5,368.167 157.5,378.833 166.5,389.5C 152.163,389.333 137.829,389.5 123.5,390C 110.736,393.764 102.236,401.931 98,414.5C 93.0209,437.715 101.521,453.548 123.5,462C 167.499,462.5 211.499,462.667 255.5,462.5C 273.315,473.965 291.648,484.632 310.5,494.5C 247.499,494.667 184.499,494.5 121.5,494C 92.9274,487.094 75.4274,469.26 69,440.5C 64.0577,409.908 73.891,385.408 98.5,367C 111.117,359.392 124.784,356.225 139.5,357.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo9}
							d='M 139.5,357.5 C 240.833,357.5 342.167,357.5 443.5,357.5C 443.914,366.582 443.414,375.582 442,384.5C 440.269,386.617 438.102,388.117 435.5,389C 345.834,389.5 256.167,389.667 166.5,389.5C 157.5,378.833 148.5,368.167 139.5,357.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo10}
							d='M 179.5,401.5 C 185.637,407.467 191.97,413.301 198.5,419C 219.671,419.168 240.671,419.668 261.5,420.5C 219.165,420.333 176.832,420.5 134.5,421C 131.833,424.333 131.833,427.667 134.5,431C 176.832,431.5 219.165,431.667 261.5,431.5C 246.005,432.331 230.339,432.831 214.5,433C 221.569,438.52 228.569,444.02 235.5,449.5C 199.167,449.5 162.833,449.5 126.5,449.5C 116.172,446.332 110.339,439.332 109,428.5C 108.182,415.308 114.016,406.475 126.5,402C 144.164,401.5 161.83,401.333 179.5,401.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo11}
							d='M 179.5,401.5 C 258.834,401.333 338.167,401.5 417.5,402C 409.582,412.376 407.415,423.876 411,436.5C 412.235,440.631 413.735,444.631 415.5,448.5C 355.669,449.499 295.669,449.832 235.5,449.5C 228.569,444.02 221.569,438.52 214.5,433C 230.339,432.831 246.005,432.331 261.5,431.5C 265.318,430.201 266.818,427.534 266,423.5C 264.871,421.859 263.371,420.859 261.5,420.5C 240.671,419.668 219.671,419.168 198.5,419C 191.97,413.301 185.637,407.467 179.5,401.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo12}
							d='M 261.5,420.5 C 263.371,420.859 264.871,421.859 266,423.5C 266.818,427.534 265.318,430.201 261.5,431.5C 219.165,431.667 176.832,431.5 134.5,431C 131.833,427.667 131.833,424.333 134.5,421C 176.832,420.5 219.165,420.333 261.5,420.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo13}
							d='M 334.5,427.5 C 351.503,427.333 368.503,427.5 385.5,428C 389.5,431.333 389.5,434.667 385.5,438C 368.5,438.667 351.5,438.667 334.5,438C 331.88,434.502 331.88,431.002 334.5,427.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo14}
							d='M 415.5,448.5 C 416.289,448.783 416.956,449.283 417.5,450C 320.332,450.832 223.332,450.666 126.5,449.5C 162.833,449.5 199.167,449.5 235.5,449.5C 295.669,449.832 355.669,449.499 415.5,448.5 Z'
						/>
					</g>
					<g>
						<path
							className={stl.bookLogo15}
							d='M 255.5,462.5 C 317.25,462.008 378.916,462.508 440.5,464C 441.701,464.903 442.535,466.069 443,467.5C 443.667,474.833 443.667,482.167 443,489.5C 442.065,492.102 440.232,493.602 437.5,494C 395.168,494.5 352.835,494.667 310.5,494.5C 291.648,484.632 273.315,473.965 255.5,462.5 Z'
						/>
					</g>
				</svg>
			)
		}
	}
}
