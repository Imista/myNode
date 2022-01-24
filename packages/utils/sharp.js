const sharp = require('sharp');

sharp('download.png')
.resize(80)
.toFile('resized.png')