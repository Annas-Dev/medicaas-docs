export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'Pengantar',
    children: [
      {
        title: 'Tentang',
        slug: '/docs',
      },
      {
        title: 'Pengembangan',
        slug: '/docs/pengantar/pengembang',
      },
      {
        title: 'Mulai Gunakan',
        slug: '/docs/pengantar/mulaigunakan',
      },
    ],
  },
  {
    title: 'Panduan',
    children: [
      {
        title: 'Login pengguna',
        slug: '/docs/panduan/loginpengguna',
      },
      {
        title: 'Mastering',
        slug: '/docs/panduan/mastering',
      },
      {
        title: 'Pendaftaran Pasien',
        slug: '/docs/panduan/pendaftaran',
      },
      {
        title: 'Penerimaan',
        slug: '/docs/panduan/penerimaan',
      },
      {
        title: 'Pelayanan',
        slug: '/docs/panduan/pelayanan',
      },
    ],
  },
];
