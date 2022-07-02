import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <div className="text--center padding-horiz--md">
              <p>تا جاوا نسخه ۸، انتشار نسخه‌های جدید جاوا بصورت نامنظم و با فواصل زمانی طولانی مدت بود که این باعث میشد
              تغییر، تکامل و پیشرفت این زبان با کندی مواجه باشد؛ ولی پس از انتشار جاوا ۸ این رویه تغییر کرد و برنامه‌ریزی شد که نسخه‌های جدید جاوا هر ۶ ماه یکبار 
               منتشر شوند که این تغییر منجر به سرعت گرفتن پیشرفت و تکامل زبان جاوا گردید؛ ولی اکنون که چندین سال از این تصمیم میگذرد و 
              هر ۶ ماه یکبار نسخه‌ی جدیدی از زبان جاوا با ویژگی‌ها و بهبودهای فراوانی منتشر شده است بنظر میرسد هنوز جامعه برنامه‌نویسان جاوا در ایران 
               با این ویژگی‌های جدید به خوبی آشنا نیستند و همین منجر به مهاجرت نکردن به نسخه‌های جدیدتر جاوا شده است؛ از این رو این پروژه تلاش میکند 
               که به مرور و با مشارکت جامعه جاواکاپ به انواع این ويزگی‌ها پرداخته و بصورت جداگانه هر یک را معرفی کند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
