// scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm")
// and a meeting duration (number of minutes). It should return true if the meeting falls
// entirely within the work day (according to the times specified in dayStart and dayEnd);
// return false if the meeting violates the work day bounds.

const dayStart = "07:30"
const dayEnd = "17:45"

function scheduleMeeting(startTime, durationMinutes) {
  const start = Number(startTime.split(":").join(""))
  const dayStartNum = Number(dayStart.split(":").join(""))
  const dayEndNum = Number(dayEnd.split(":").join(""))

  if (start >= dayStartNum && start <= dayEndNum) {
    if (start + durationMinutes <= dayEndNum) console.log(true)
    else console.log(false)
  } else console.log(false)
}
