import { Pagination } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import { useDeviceDeps } from '@/featured/device/deps';

export const Pages = observer(() => {
  const device = useDeviceDeps();
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination
      total={pages.length}
      value={device.page}
      onChange={value => device.setPage(value)}
    />
  );
});
