import kebabcase from 'lodash.kebabcase';
import { S as SITE } from './config_JJhEf13K.mjs';

const slugifyStr = (str) => kebabcase(str);
const slugifyAll = (arr) => arr.map((str) => slugifyStr(str));

const postFilter = ({ data }) => {
  const isPublishTimePassed = Date.now() > new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && isPublishTimePassed;
};

export { slugifyAll as a, postFilter as p, slugifyStr as s };
