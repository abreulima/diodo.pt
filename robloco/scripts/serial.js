async function connectToSerial() {
    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 38400 });
        serialPort = port;
        enableTabs();

    } catch (error) {
        console.error('Error connecting to serial device:', error);
    }
}


async function sendBytesArray(dataArray) {
    const writer = serialPort.writable.getWriter();
    const data = new Uint8Array(dataArray); // L 255 0 0  
    await writer.write(data);
    writer.releaseLock();
}