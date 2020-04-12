# Plan At Home

# Components
ใน App แบ่งเป็น page
## page/
	* Home หน้าแรกของเว็บ
	* About หน้า
	* Register หน้าสมัครสมาชิก
	* Login หน้าเข้าสู่ระบบ
	* Plan หน้าแสดงข้อมูล plan
	* Profile หน้า profile user

## Plan/
	* PlanList สำหรับแสดงรายการ plan ทั้งหมด
	* PlanModal สำหรับเพิ่มหรือแก้ไขข้อมูล plan

## PlanList/
	* PlanCard สำหรับแสดง card ข้อมูล plan 1 วัน

## PlanCard/
	* ActivityList สำหรับแสดงกิจกรรมทั้งหมดภายใน plan 1 วัน
	* ActivityForm สำหรับแสดง form เพิ่มข้อมูลกิจกรรม

## ActivityList/
	* Activity สำหรับข้อมูลกิจกรรม 1 กิจกรรม



## Profile/
	* PlofileCard แสดงข้อมูล user
	* ProfileModal แสดง form แก้ไข้ข้อมูล user






# Token
ได้รับ token จาก server หลังจากนำข้อมูลใน form Register หรือ Login ส่งไปยัง server เพื่อสร้าง token
บันทึก token ไว้ใน store (Redux) และบันทึก token ไว้ใน localStorage เพื่อคงสถานะ login
ส่ง token ไปให้ server เพื่อรับ user มาใช้งาน
บันทึก user ไว้ใน store (Redux)
หาก logout จะลบ token ใน localStorage 

# Endpoint
	* POST: /api/register สำหรับสร้าง user ใหม่ และส่ง token ให้  client

	* POST: /api/login สำหรับ login และส่ง token ให้  client

	* [auth] GET: /api/user สำหรับรับ token และส่ง user ให้ client
	PUT: /api/user/:id

	* [auth] GET: /api/plans สำหรับรับ plan ทั้งหมดที่สร้างโดย user
	* POST: /api/plans สำหรับสร้าง plan ใหม่
	* PUT: /api/plans/:id สำหรับอัพเดต plan ตาม id
	* DELETE: /api/plan/:id สำหรับลบ plan ตาม id

	* POST: /api/plans/:id/activities สำหรับเพิ่ม activity ใน plan ตาม id

## [auth]
	* GET: /api/user
	* GET: /api/plans





Github Repository: https://github.com/BevilKunG/plan-at-home
Website Url: https://plan-at-home.herokuapp.com/


