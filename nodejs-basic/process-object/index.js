const initialMemoryUsage =  process.memoryUsage().heapUsed;
const yourName = process.argv.yourName || 'Lila';
const environment  = process.env.NODE_ENV || "development";

for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage  = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);