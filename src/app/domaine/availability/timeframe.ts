export class Timeframe {
  public day: string;
  public hour: number;

  constructor(day: string, hour: number) {
    this.day = day;
    this.hour = hour;
  }

  static buildTimeBlock(tfs: Timeframe[]): {beginAt: number, endAt: number, duration: number}[] {
    const timeBlockList: {beginAt: number, endAt: number, duration: number}[] = []
    const blockTimeUnit: number = 0.25;
    let begin: number | null = null
    let end: number | null = null
    if (tfs.length === 0) return []
    tfs.forEach((tf) => {
      console.log(begin, end)
      if (begin === null) {
        begin = tf.hour
        end = tf.hour + blockTimeUnit
        console.log(begin, end)
      } else {
        if (tf.hour === end) {
          end += blockTimeUnit;
        } else {
          timeBlockList.push({beginAt: begin, endAt: end!, duration: end! - begin});
          begin = tf.hour;
          end = tf.hour + blockTimeUnit;
        }
      }
    })
    timeBlockList.push({beginAt: begin!, endAt: end!, duration: end! - begin!})
    console.log(timeBlockList)
    return timeBlockList;
  }
}
