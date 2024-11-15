// 定义时间单位的枚举（小时、分钟、秒）
export enum TimeUnit {
  Millisecond = 1,        // 毫秒
  Second = Millisecond * 1000,  // 1秒 = 1000毫秒
  Minute = Second * 60,   // 1分钟 = 60秒 = 60000毫秒
  Hour = Minute * 60,     // 1小时 = 60分钟 = 3600000毫秒
}

// 定义一周的七天
export enum DayOfWeek {
  Sunday,   // 星期天
  Monday,   // 星期一
  Tuesday,  // 星期二
  Wednesday, // 星期三
  Thursday, // 星期四
  Friday,   // 星期五
  Saturday  // 星期六
}

// 定义月份
export enum Month {
  January = 1,    // 1月
  February,       // 2月
  March,          // 3月
  April,          // 4月
  May,            // 5月
  June,           // 6月
  July,           // 7月
  August,         // 8月
  September,      // 9月
  October,        // 10月
  November,       // 11月
  December        // 12月
}

// 定义一天的时间段（上午、下午、晚上等）
export enum TimeOfDay {
  Morning = 'Morning',   // 上午
  Afternoon = 'Afternoon', // 下午
  Evening = 'Evening',   // 晚上
  Night = 'Night'        // 夜间
}
