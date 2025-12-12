export async function pressKey(ip: string, key: string) {
  const url = `http://${ip}:8060/keypress/${key}`

  try {
    await fetch(url, {
      method: "POST",
    })
  } catch (e) {
    console.log("Error sending key:", e)
  }
}

export async function sendText(ip: string, text: string) {
  const url = `http://${ip}:8060/input?text=${encodeURIComponent(text)}`

  try {
    await fetch(url, {
      method: "POST",
    })
  } catch (e) {
    console.log("Error sending text:", e)
  }
}

export async function launchApp(ip: string, channelId: number) {
  const url = `http://${ip}:8060/launch/${channelId}`
  try {
    await fetch(url, {
      method: "POST",
    })
  } catch (err) {
    console.log("Launch error:", err)
  }
}

export async function togglePower(ip: string, status: "On" | "Off") {
  const url = `http://${ip}:8060/keypress/Power${status}`
  try {
    await fetch(url, { method: "POST" })
  } catch (err) {
    console.log("Power error:", err)
  }
}
