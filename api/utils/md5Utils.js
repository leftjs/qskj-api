/**
 * Created by zhangjiasheng on 16/9/12.
 */
import crypto from 'crypto'

export const md5 = (text) => {
	return crypto.createHash('md5').update(text).digest('hex')
}

export const getCaptcha = (str, salt) => {
	const md5Str = `${str}${salt}`
  return md5(md5Str).substring(md5Str.length - 4)
}