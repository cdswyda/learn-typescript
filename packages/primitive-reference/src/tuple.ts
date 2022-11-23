const point: [number, number] = [10, 20]; // 表示一个二维坐标点
const point2: [number, number, number] = [0, 10, -10]; // 表示一个三维坐标点

// const d = Math.sqrt((point[0] - point2[0]) ** 2 + (point[1] - point2[1]) ** 2 + (point[2] - point2[2]) ** 2);

// Labeled Tuple Elements
const point3: [x: number, y: number] = [10, 20]; // 表示一个二维坐标点
type Point = [x: number, y: number, z: number]; // 定义三位坐标点类型
const point4: Point = [0, 10, -10]; // 表示一个三维坐标点

// readonly Tuple Elements
const originPoint: readonly [number, number] = [0, 0]; // 表示一个二维坐标点
originPoint[0] = 10; // error: Cannot assign to '0' because it is a read-only property
