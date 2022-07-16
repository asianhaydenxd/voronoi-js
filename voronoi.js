const repChars = ".+;>#"

let euclid = ({x: x1, y: y1}, {x: x2, y: y2}) => Math.sqrt( (x1-x2)**2 + (y1-y2)**2 )

async function voronoi(width, height, points) {
    for (let y = 0; y < height; y++) {
    	for (let x = 0; x < width; x++) {
	    const currentPoint = {x: x, y: y}
	    
	    // Algorithm for finding the closest point
	    let nearest = points[0];
	    for (point of points) {
	        if (euclid(currentPoint, point) < euclid(currentPoint, nearest)) {
		    nearest = point;
	        }
	    }

	    if (euclid(currentPoint, nearest) == 0) {
		process.stdout.write("()");
		continue;
	    }

	    process.stdout.write(repChars[points.indexOf(nearest)]);
	    process.stdout.write(repChars[points.indexOf(nearest)]);
	}
	process.stdout.write("\n");
    }
}

async function generateDiagram() {
    console.log("Generating voronoi diagram...");
    await voronoi(10, 10, [{x: 5, y: 1}, {x: 9, y: 9}, {x: 2, y: 5}]);
}

generateDiagram();

