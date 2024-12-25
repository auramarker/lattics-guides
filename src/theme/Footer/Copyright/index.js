import React, {useMemo} from 'react';

export default function FooterCopyright({copyright}) {
    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <div className="footer__copyright">Copyright © {year} Aura Marker Studio Co., Ltd. All Rights Reserve. <a
            className='hide_en' href='https://beian.miit.gov.cn' target='_blank'>粤ICP备13067222号</a></div>
    );
}
