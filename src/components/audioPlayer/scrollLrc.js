/**
 * 计算秒数
 * @params 入参格式 "01:04.26"
 * @returns 返回格式 3.67 数字
 */
export const transformSec = (str) => {
  const minutes = str.split(":")[0];
  const seco = str.split(":")[1];
  return +minutes * 60 + +seco;
};

/**
 * 转换歌词方法
 * @params lrc: 参数为歌词
 * @returns 返回一个对象数组 [{ time: 歌词时间, words: 歌词 }]
 */
export const transformLrc = (lrc) => {
  const list = lrc.split("\n").map((item) => ({
    time: item.split("]")[0].substring(1),
    words: item.split("]")[1],
  }));
  return list.map((item) => ({
    ...item,
    time: transformSec(item.time),
  }));
};

/**
 * 根据歌曲时间找到歌词在数组中的下标
 */
export const findLrcIndex = (time, lrc) => {
  for (let i = 0; i < lrc.length; i++) {
    if (time < lrc[i].time) {
      return i - 1;
    }
  }
  return lrc.length - 1;
};

/**
 * 计算滚动区域偏移的距离
 */

export const offsetNum = (index) => {
  let distance = index * 30 + 15 - 200;
  return -distance;
};
