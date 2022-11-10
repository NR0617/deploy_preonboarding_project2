import { get } from './http';

export const getDetailPageData = async number => {
  const detailPageData = await get({
    url: `/angular/angular-cli/issues/${number}`,
    data: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  return detailPageData.data;
};
