const repChars = ".+;>#"

async function voronoi(width, height, points) {
    for (let y = 0; y < height; y++) {
    	for (let x = 0; x < width; x++) {
	    if (points.contains({width, height})) {
	        process.stdout.write("()");
		continue;
	    }
	    
	    // Algorithm for finding the closest point
	}
	process.stdout.write("\n");
    }
}

async function generateDiagram() {
    console.log("Generating voronoi diagram...");
    await voronoi(10, 10, [{1, 1}, {9, 9}]);
}

generateDiagram();

