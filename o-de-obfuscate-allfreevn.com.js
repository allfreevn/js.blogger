document.querySelector('.openPopup').addEventListener('click', function() {var jPopupDemo = new jPopup({contentHtml: 'PCFET0NUWVBFIGh0bWw+DQo8aHRtbCBkaXI9Imx0ciIgbGFuZz0iZW4tdXMiPjxoZWFkPjxtZXRhIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSIgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PVVURi04Ij4NCjwhLS1baWYgbHQgSUUgNyBdPiA8aHRtbCBsYW5nPSJlbi11cyIgZGlyPSJsdHIiIGNsYXNzPSJpZSBpZTYiPiA8IVtlbmRpZl0tLT4NCjwhLS1baWYgSUUgNyBdPiAgICA8aHRtbCBsYW5nPSJlbi11cyIgZGlyPSJsdHIiIGNsYXNzPSJpZSBpZTciPiA8IVtlbmRpZl0tLT4NCjwhLS1baWYgSUUgOCBdPiAgICA8aHRtbCBsYW5nPSJlbi11cyIgZGlyPSJsdHIiIGNsYXNzPSJpZSBpZTgiPiA8IVtlbmRpZl0tLT4NCjwhLS1baWYgSUUgOSBdPiAgICA8aHRtbCBsYW5nPSJlbi11cyIgZGlyPSJsdHIiIGNsYXNzPSJpZSBpZTkiPiA8IVtlbmRpZl0tLT4NCjwhLS1baWYgKGd0IElFIDkpfCEoSUUpXT48IS0tPiA8IS0tPCFbZW5kaWZdLS0+DQo8dGl0bGU+T25saW5lIEphdmFTY3JpcHQgRGVvYmZ1c2NhdGU8L3RpdGxlPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4qe21hcmdpbjowO3BhZGRpbmc6MDt9LmllNiBkaXZ7ZGlzcGxheTpub25lfS5pZTYgI2llNi1nby1hd2F5e2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O31pbWd7Ym9yZGVyOjA7ZGlzcGxheTpibG9jazt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt9I2JsdXJie3dpZHRoOjI2MHB4O2Zsb2F0OnJpZ2h0O30jYmVhdXR5e2JvcmRlci10b3A6MXB4IHNvbGlkICNmNmY2ZjY7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6MjcwcHg7fWJvZHl7YmFja2dyb3VuZDojZmVmZWZlO31ib2R5LGJ1dHRvbixzZWxlY3QsbGFiZWx7Zm9udDoxM3B4LzEuMjMxIGFyaWFsLHNhbnMtc2VyaWY7KmZvbnQtc2l6ZTpzbWFsbDt9c2VsZWN0LGxhYmVse2ZvbnQtc2l6ZToxMnB4O31ib2R5LGh0bWx7aGVpZ2h0OjEwMCU7d2lkdGg6OTkwcHg7Y29sb3I6IzMzMzt9dGV4dGFyZWF7Y29sb3I6IzQ0NDtoZWlnaHQ6MTAwJTt3aWR0aDo3MDBweDtib3JkZXI6MDt9LmllNyBmaWVsZHNldCN0ZXh0YXJlYS13cmFwe3BhZGRpbmc6NXB4IDA7fS5pZTggZmllbGRzZXQjdGV4dGFyZWEtd3JhcHtwYWRkaW5nOjVweCAwIDAgNXB4O31maWVsZHNldHtib3JkZXI6MDt9dWwsbGl7bGlzdC1zdHlsZTpub25lO31he2NvbG9yOiMzNmQ7fWZpZWxkc2V0I3RleHRhcmVhLXdyYXB7aGVpZ2h0OmF1dG87d2lkdGg6NzAwcHg7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp3aGl0ZTtsZWZ0OjA7dG9wOjBweDtyaWdodDowO2JvdHRvbTowO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWJvdHRvbTo1cHg7bWFyZ2luLWxlZnQ6NXB4O21hcmdpbi1yaWdodDoyNzBweDttYXJnaW4tdG9wOjQwcHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yaWdodDoxcHggc29saWQgIzY2Njtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNjY2O3BhZGRpbmc6NXB4O31idXR0b24jc3VibWl0e21hcmdpbi10b3A6NXB4O21hcmdpbi1sZWZ0OjVweDtoZWlnaHQ6MzBweDtsaW5lLWhlaWdodDoyOHB4O3dpZHRoOjcwNnB4O2JvcmRlcjoxcHggc29saWQgI2FhYTtib3JkZXItbGVmdDoxcHggc29saWQgIzY2Njtib3JkZXItdG9wOjFweCBzb2xpZCAjNjY2Oy1tb3otYm9yZGVyLXJhZGl1czo1cHg7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjVweDtib3JkZXItcmFkaXVzOjVweDstbW96LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nOy13ZWJraXQtYmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtiYWNrZ3JvdW5kOiNjY2M7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxmcm9tKCNFRUVFRUUpLHRvKCNDQ0NDQ0MpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwjRUVFRUVFLCNDQ0NDQ0MpO2JhY2tncm91bmQtaW1hZ2U6LW1vei1saW5lYXItZ3JhZGllbnQodG9wLCNFRUVFRUUsI0NDQ0NDQyk7YmFja2dyb3VuZC1pbWFnZTotbXMtbGluZWFyLWdyYWRpZW50KHRvcCwjRUVFRUVFLCNDQ0NDQ0MpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KHRvcCwjRUVFRUVFLCNDQ0NDQ0MpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvcCwjRUVFRUVFLCNDQ0NDQ0MpO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvclN0cj0nI0VFRUVFRScsRW5kQ29sb3JTdHI9JyNDQ0NDQ0MnKTtjdXJzb3I6cG9pbnRlcjtjb2xvcjojNDQ0O31idXR0b24jc3VibWl0IGVte2ZvbnQtc2l6ZToxMXB4O2ZvbnQtc3R5bGU6bm9ybWFsO2NvbG9yOiM5OTk7fWxhYmVse2N1cnNvcjpwb2ludGVyO30jb3B0aW9uc3ttYXJnaW4tdG9wOjVweDttYXJnaW4tYm90dG9tOjE1cHg7fSNvcHRpb25zIGxpe21hcmdpbi1ib3R0b206NHB4O2ZvbnQtc2l6ZTo5MCU7fSNvcHRpb25zIHNlbGVjdHtmb250OjEzcHgvMS4yMzEgYXJpYWwsc2Fucy1zZXJpZjtwYWRkaW5nOjAgNXB4O3dpZHRoOjIyMHB4O30jdGFic2l6ZXttYXJnaW4tdG9wOjJweDt9I2JyYWNlLXN0eWxle21hcmdpbi1ib3R0b206NnB4O30jYmx1cmIgaDJ7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojNTU1O30jYmx1cmIgcHtsaW5lLWhlaWdodDoxNDAlO2ZvbnQtc2l6ZToxMXB4O21hcmdpbi1yaWdodDoxNnB4O21hcmdpbi1ib3R0b206MTFweDt9I2Zvb3Rlcntmb250LXNpemU6MTFweDtsaW5lLWhlaWdodDoxNDAlO30jYmx1cmIgcC5tZS1tZS1tZXttYXJnaW4tYm90dG9tOjRweDt9I2JsdXJiIHAuY29udHJpYnV0b3Jze2NvbG9yOiM2NjY7fSNibHVyYiAjdXNlcyBsaXtmb250LXNpemU6MTFweDttYXJnaW4tYm90dG9tOjRweDttYXJnaW4tcmlnaHQ6NHB4O30jYmx1cmIgI3VzZXMgbGkud3JpdGVtZXtmb250LXN0eWxlOm5vcm1hbDtjb2xvcjojODg4O21hcmdpbi1ib3R0b206MzBweDtsaW5lLWhlaWdodDoxMzAlO308L3N0eWxlPg0KPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9hbGxmcmVldm4vanMuYmxvZ2dlci9mMDBmMzYzZC9kZW9iZnVzY2F0ZS1hbGxmcmVldm4uY29tLmpzIj48L3NjcmlwdD4NCjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9Imh0dHBzOi8vY2RuLnJhd2dpdC5jb20vYWxsZnJlZXZuL2pzLmJsb2dnZXIvZjAwZjM2M2QvanF1ZXJ5LmNvb2tpZS1hbGxmcmVldm4uY29tLmpzIj48L3NjcmlwdD4NCjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4NCnZhciB0aGUgPSB7DQogICAgYmVhdXRpZnlfaW5fcHJvZ3Jlc3M6IGZhbHNlDQp9DQpmdW5jdGlvbiB0cmltX2xlYWRpbmdfY29tbWVudHMoc3RyKQ0Kew0KICAgIC8vIHZlcnkgYmFzaWMuIGRvZXNuJ3Qgc3VwcG9ydCAvKiAuLi4gKi8NCiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXihccypcL1wvW15cbl0qXG4pKy8sICcnKTsNCiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXlxzKy8sICcnKTsNCiAgICByZXR1cm4gc3RyOw0KfQ0KZnVuY3Rpb24gcnVuX3Rlc3RzKCkNCnsNCiAgICB2YXIgc3QgPSBuZXcgU2FuaXR5VGVzdCgpOw0KICAgIHJ1bl9iZWF1dGlmaWVyX3Rlc3RzKHN0KTsNCiAgICBKYXZhc2NyaXB0T2JmdXNjYXRvci5ydW5fdGVzdHMoc3QpOw0KICAgIFBfQV9DX0tfRV9SLnJ1bl90ZXN0cyhzdCk7DQogICAgVXJsZW5jb2RlZC5ydW5fdGVzdHMoc3QpOw0KICAgIE15T2JmdXNjYXRlLnJ1bl90ZXN0cyhzdCk7DQogICAgJCgnI3Rlc3RyZXN1bHRzJykuaHRtbChzdC5yZXN1bHRzKCkpLnNob3coKTsNCn0NCmZ1bmN0aW9uIGFueShhLCBiKQ0Kew0KICAgIHJldHVybiBhID8gYSA6IGI7DQp9DQpmdW5jdGlvbiByZWFkX3NldHRpbmdzX2Zyb21fY29va2llKCkNCnsNCiAgICAkKCcjdGFic2l6ZScpLnZhbChhbnkoJC5jb29raWUoJ3RhYnNpemUnKSwgJzQnKSk7DQogICAgJCgnI2JyYWNlLXN0eWxlJykudmFsKGFueSgkLmNvb2tpZSgnYnJhY2Utc3R5bGUnKSwgJ2NvbGxhcHNlJykpOw0KICAgICQoJyNkZXRlY3QtcGFja2VycycpLmF0dHIoJ2NoZWNrZWQnLCAkLmNvb2tpZSgnZGV0ZWN0LXBhY2tlcnMnKSAhPT0gJ29mZicpOw0KICAgICQoJyNwcmVzZXJ2ZS1uZXdsaW5lcycpLmF0dHIoJ2NoZWNrZWQnLCAkLmNvb2tpZSgncHJlc2VydmUtbmV3bGluZXMnKSAhPT0gJ29mZicpOw0KICAgICQoJyNrZWVwLWFycmF5LWluZGVudGF0aW9uJykuYXR0cignY2hlY2tlZCcsICQuY29va2llKCdrZWVwLWFycmF5LWluZGVudGF0aW9uJykgPT09ICdvbicpOw0KDQp9DQpmdW5jdGlvbiBzdG9yZV9zZXR0aW5nc190b19jb29raWUoKQ0Kew0KICAgIHZhciBvcHRzID0geyBleHBpcmVzOiAzNjAgfTsNCiAgICAkLmNvb2tpZSgndGFic2l6ZScsICQoJyN0YWJzaXplJykudmFsKCksIG9wdHMpOw0KICAgICQuY29va2llKCdicmFjZS1zdHlsZScsICQoJyNicmFjZS1zdHlsZScpLnZhbCgpLCBvcHRzKTsNCiAgICAkLmNvb2tpZSgnZGV0ZWN0LXBhY2tlcnMnLCAkKCcjZGV0ZWN0LXBhY2tlcnMnKS5hdHRyKCdjaGVja2VkJykgPyAnb24nIDogJ29mZicsIG9wdHMpOw0KICAgICQuY29va2llKCdwcmVzZXJ2ZS1uZXdsaW5lcycsICQoJyNwcmVzZXJ2ZS1uZXdsaW5lcycpLmF0dHIoJ2NoZWNrZWQnKSA/ICdvbicgOiAnb2ZmJywgb3B0cyk7DQogICAgJC5jb29raWUoJ2tlZXAtYXJyYXktaW5kZW50YXRpb24nLCAkKCcja2VlcC1hcnJheS1pbmRlbnRhdGlvbicpLmF0dHIoJ2NoZWNrZWQnKSA/ICdvbicgOiAnb2ZmJywgb3B0cyk7DQoNCn0NCmZ1bmN0aW9uIHVucGFja2VyX2ZpbHRlcihzb3VyY2UpDQp7DQogICAgdmFyIHRyYWlsaW5nX2NvbW1lbnRzID0gJyc7DQogICAgdmFyIGNvbW1lbnQgPSAnJzsNCiAgICB2YXIgZm91bmQgPSBmYWxzZTsNCg0KICAgIGRvIHsNCiAgICAgICAgZm91bmQgPSBmYWxzZTsNCiAgICAgICAgaWYgKC9eXHMqXC9cKi8udGVzdChzb3VyY2UpKSB7DQogICAgICAgICAgICBmb3VuZCA9IHRydWU7DQogICAgICAgICAgICBjb21tZW50ID0gc291cmNlLnN1YnN0cigwLCBzb3VyY2UuaW5kZXhPZignKi8nKSArIDIpOw0KICAgICAgICAgICAgc291cmNlID0gc291cmNlLnN1YnN0cihjb21tZW50Lmxlbmd0aCkucmVwbGFjZSgvXlxzKy8sICcnKTsNCiAgICAgICAgICAgIHRyYWlsaW5nX2NvbW1lbnRzICs9IGNvbW1lbnQgKyAiXG4iOw0KICAgICAgICB9IGVsc2UgaWYgKC9eXHMqXC9cLy8udGVzdChzb3VyY2UpKSB7DQogICAgICAgICAgICBmb3VuZCA9IHRydWU7DQogICAgICAgICAgICBjb21tZW50ID0gc291cmNlLm1hdGNoKC9eXHMqXC9cLy4qLylbMF07DQogICAgICAgICAgICBzb3VyY2UgPSBzb3VyY2Uuc3Vic3RyKGNvbW1lbnQubGVuZ3RoKS5yZXBsYWNlKC9eXHMrLywgJycpOw0KICAgICAgICAgICAgdHJhaWxpbmdfY29tbWVudHMgKz0gY29tbWVudCArICJcbiI7DQogICAgICAgIH0NCiAgICB9IHdoaWxlIChmb3VuZCk7DQoNCiAgICBpZiAoUF9BX0NfS19FX1IuZGV0ZWN0KHNvdXJjZSkpIHsNCiAgICAgICAgc291cmNlID0gdW5wYWNrZXJfZmlsdGVyKFBfQV9DX0tfRV9SLnVucGFjayhzb3VyY2UpKQ0KICAgIH0NCiAgICBpZiAoVXJsZW5jb2RlZC5kZXRlY3Qoc291cmNlKSkgew0KICAgICAgICBzb3VyY2UgPSB1bnBhY2tlcl9maWx0ZXIoVXJsZW5jb2RlZC51bnBhY2soc291cmNlKSkNCiAgICB9DQogICAgaWYgKEphdmFzY3JpcHRPYmZ1c2NhdG9yLmRldGVjdChzb3VyY2UpKSB7DQogICAgICAgIHNvdXJjZSA9IHVucGFja2VyX2ZpbHRlcihKYXZhc2NyaXB0T2JmdXNjYXRvci51bnBhY2soc291cmNlKSkNCiAgICB9DQogICAgaWYgKE15T2JmdXNjYXRlLmRldGVjdChzb3VyY2UpKSB7DQogICAgICAgIHNvdXJjZSA9IHVucGFja2VyX2ZpbHRlcihNeU9iZnVzY2F0ZS51bnBhY2soc291cmNlKSkNCiAgICB9DQoNCiAgICByZXR1cm4gdHJhaWxpbmdfY29tbWVudHMgKyBzb3VyY2U7DQp9DQpmdW5jdGlvbiBiZWF1dGlmeSgpDQp7DQogICAgaWYgKHRoZS5iZWF1dGlmeV9pbl9wcm9ncmVzcykgcmV0dXJuOw0KDQogICAgc3RvcmVfc2V0dGluZ3NfdG9fY29va2llKCk7DQoNCiAgICB0aGUuYmVhdXRpZnlfaW5fcHJvZ3Jlc3MgPSB0cnVlOw0KDQogICAgdmFyIHNvdXJjZSA9ICQoJyNzb3VyY2UnKS52YWwoKS5yZXBsYWNlKC9eXHMrLywgJycpOw0KICAgIHZhciBpbmRlbnRfc2l6ZSA9ICQoJyN0YWJzaXplJykudmFsKCk7DQogICAgdmFyIGluZGVudF9jaGFyID0gaW5kZW50X3NpemUgPT0gMSA/ICdcdCcgOiAnICc7DQogICAgdmFyIHByZXNlcnZlX25ld2xpbmVzID0gJCgnI3ByZXNlcnZlLW5ld2xpbmVzJykuYXR0cignY2hlY2tlZCcpOw0KICAgIHZhciBrZWVwX2FycmF5X2luZGVudGF0aW9uID0gJCgnI2tlZXAtYXJyYXktaW5kZW50YXRpb24nKS5hdHRyKCdjaGVja2VkJyk7DQogICAgdmFyIGJyYWNlX3N0eWxlID0gJCgnI2JyYWNlLXN0eWxlJykudmFsKCk7DQoNCiAgICBpZiAoJCgnI2RldGVjdC1wYWNrZXJzJykuYXR0cignY2hlY2tlZCcpKSB7DQogICAgICAgIHNvdXJjZSA9IHVucGFja2VyX2ZpbHRlcihzb3VyY2UpOw0KICAgIH0NCiAgICB2YXIgY29tbWVudF9tYXJrID0gJzwtJyArICctJzsNCiAgICB2YXIgb3B0cyA9IHsNCiAgICAgICAgICAgICAgICBpbmRlbnRfc2l6ZTogaW5kZW50X3NpemUsDQogICAgICAgICAgICAgICAgaW5kZW50X2NoYXI6IGluZGVudF9jaGFyLA0KICAgICAgICAgICAgICAgIHByZXNlcnZlX25ld2xpbmVzOnByZXNlcnZlX25ld2xpbmVzLA0KICAgICAgICAgICAgICAgIGJyYWNlX3N0eWxlOiBicmFjZV9zdHlsZSwNCiAgICAgICAgICAgICAgICBrZWVwX2FycmF5X2luZGVudGF0aW9uOmtlZXBfYXJyYXlfaW5kZW50YXRpb24sDQogICAgICAgICAgICAgICAgc3BhY2VfYWZ0ZXJfYW5vbl9mdW5jdGlvbjp0cnVlfTsNCg0KICAgIGlmIChzb3VyY2UgJiYgc291cmNlWzBdID09PSAnPCcgJiYgc291cmNlLnN1YnN0cmluZygwLCA0KSAhPT0gY29tbWVudF9tYXJrKSB7DQogICAgICAgICQoJyNzb3VyY2UnKS52YWwoDQogICAgICAgICAgICBzdHlsZV9odG1sKHNvdXJjZSwgb3B0cykNCiAgICAgICAgKTsNCiAgICB9IGVsc2Ugew0KICAgICAgICB2YXIgdiA9IGpzX2JlYXV0aWZ5KHVucGFja2VyX2ZpbHRlcihzb3VyY2UpLCBvcHRzKTsNCiAgICAgICAgJCgnI3NvdXJjZScpLnZhbCh2KTsNCiAgICB9DQoNCiAgICB0aGUuYmVhdXRpZnlfaW5fcHJvZ3Jlc3MgPSBmYWxzZTsNCn0NCiQoZnVuY3Rpb24oKSB7DQoNCiAgICBpZiAoJC5icm93c2VyLm1zaWUpIHsNCiAgICAgICAgJCgnI3NvdXJjZScpLndpZHRoKCAkKCcjdGV4dGFyZWEtd3JhcCcpLndpZHRoKCkgLSAxMCkNCiAgICAgICAgICAgICAgICAgICAgLmhlaWdodCgkKCcjdGV4dGFyZWEtd3JhcCcpLmhlaWdodCgpIC0gMTApOw0KICAgIH0NCg0KICAgIHJlYWRfc2V0dGluZ3NfZnJvbV9jb29raWUoKTsNCg0KICAgIHZhciBkZWZhdWx0X3RleHQgPSAiUGFzdGUgdGhlIE9iZnVzY2F0ZWQgSmF2YVNjcmlwdCBjb2RlIGhlcmUgYW5kIGNsaWNrIERlLW9iZnVzY2F0ZSBKYXZhU2NyaXB0IjsNCiAgICAkKCcjc291cmNlJykudmFsKGRlZmF1bHRfdGV4dCkuYmluZCgnY2xpY2sgZm9jdXMnLCBmdW5jdGlvbiAoKSB7DQogICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IGRlZmF1bHRfdGV4dCkgew0KICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpOw0KICAgICAgICB9DQogICAgfSkuYmluZCgnYmx1cicsIGZ1bmN0aW9uICgpIHsNCiAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gJycpIHsNCiAgICAgICAgICAgICQodGhpcykudmFsKGRlZmF1bHRfdGV4dCk7DQogICAgICAgIH0NCg0KICAgIH0pDQogICAgJCh3aW5kb3cpLmJpbmQoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkgew0KICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSAxMykgew0KICAgICAgICAgICAgYmVhdXRpZnkoKTsNCiAgICAgICAgfQ0KICAgIH0pDQogICAgJCgnI3N1Ym1pdCcpLmJpbmQoJ2NsaWNrJywgYmVhdXRpZnkpOw0KICAgICQoJ3NlbGVjdCcpLmJpbmQoJ2NoYW5nZScsIGJlYXV0aWZ5KTsNCn0pOw0KPC9zY3JpcHQ+DQo8L2hlYWQ+PGJvZHk+DQo8ZGl2IGlkPSJibHVyYiI+DQo8ZmllbGRzZXQgaWQ9Im9wdGlvbnMiPg0KPHVsPg0KPGxpPjxzZWxlY3QgbmFtZT0idGFic2l6ZSIgaWQ9InRhYnNpemUiPg0KPG9wdGlvbiB2YWx1ZT0iMSI+SW5kZW50IHdpdGggYSB0YWIgY2hhcmFjdGVyPC9vcHRpb24+DQo8b3B0aW9uIHZhbHVlPSIyIj5JbmRlbnQgd2l0aCAyIHNwYWNlczwvb3B0aW9uPg0KPG9wdGlvbiB2YWx1ZT0iMyI+SW5kZW50IHdpdGggMyBzcGFjZXM8L29wdGlvbj4NCjxvcHRpb24gc2VsZWN0ZWQ9InNlbGVjdGVkIiB2YWx1ZT0iNCI+SW5kZW50IHdpdGggNCBzcGFjZXM8L29wdGlvbj4NCjxvcHRpb24gdmFsdWU9IjgiPkluZGVudCB3aXRoIDggc3BhY2VzPC9vcHRpb24+DQo8L3NlbGVjdD48L2xpPg0KPGxpPjxzZWxlY3QgaWQ9ImJyYWNlLXN0eWxlIj4NCjxvcHRpb24gc2VsZWN0ZWQ9InNlbGVjdGVkIiB2YWx1ZT0iY29sbGFwc2UiPkJyYWNlcyB3aXRoIGNvbnRyb2wgc3RhdGVtZW50PC9vcHRpb24+DQo8b3B0aW9uIHZhbHVlPSJleHBhbmQiPkJyYWNlcyBvbiBvd24gbGluZTwvb3B0aW9uPg0KPG9wdGlvbiB2YWx1ZT0iZW5kLWV4cGFuZCI+RW5kIGJyYWNlcyBvbiBvd24gbGluZTwvb3B0aW9uPg0KPC9zZWxlY3Q+PC9saT4NCjxsaT48aW5wdXQgY2hlY2tlZD0iY2hlY2tlZCIgY2xhc3M9ImNoZWNrYm94IiBpZD0icHJlc2VydmUtbmV3bGluZXMiIHR5cGU9ImNoZWNrYm94Ij48bGFiZWwgZm9yPSJwcmVzZXJ2ZS1uZXdsaW5lcyI+IFByZXNlcnZlIGVtcHR5IGxpbmVzPzwvbGFiZWw+PGJyPjwvbGk+DQo8bGk+PGlucHV0IGNoZWNrZWQ9ImNoZWNrZWQiIGNsYXNzPSJjaGVja2JveCIgaWQ9ImRldGVjdC1wYWNrZXJzIiB0eXBlPSJjaGVja2JveCI+PGxhYmVsIGZvcj0iZGV0ZWN0LXBhY2tlcnMiPiBEZXRlY3QgcGFja2VycyBhbmQgb2JmdXNjYXRvcnM/PC9sYWJlbD48YnI+PC9saT4NCjxsaT48aW5wdXQgY2xhc3M9ImNoZWNrYm94IiBpZD0ia2VlcC1hcnJheS1pbmRlbnRhdGlvbiIgdHlwZT0iY2hlY2tib3giPjxsYWJlbCBmb3I9ImtlZXAtYXJyYXktaW5kZW50YXRpb24iPiBLZWVwIGFycmF5IGluZGVudGF0aW9uPzwvbGFiZWw+PC9saT4NCjxsaT48ZGl2PjxhIGhyZWY9Imh0dHBzOi8vd3d3LmFsbGZyZWV2bi5jb20iPjxiPndXdy5BbGxGcmVlVm4uQ29tPC9iPjwvYT48L2Rpdj48YnIvPjwvbGk+DQo8bGk+S2V5d29yZHM6IGRlY29kZSBqcyBvbmxpbmUsIGRlY29kZSBqYXZhc2NyaXB0LCBkZWNvZGUgamF2YXNjcmlwdCBvYmZ1c2NhdG9yLCBkZWNvZGUganM8L2xpPg0KPC91bD4NCjwvZmllbGRzZXQ+DQo8L2Rpdj4NCjxkaXYgaWQ9ImJlYXV0eSI+DQo8YnV0dG9uIGlkPSJzdWJtaXQiPjxzdHJvbmc+RGUtb2JmdXNjYXRlIEphdmFTY3JpcHQ8L3N0cm9uZz4gPGVtPihDdHJsIC0gRW50ZXIpPC9lbT48L2J1dHRvbj4NCjxmaWVsZHNldCBpZD0idGV4dGFyZWEtd3JhcCI+DQo8dGV4dGFyZWEgaWQ9InNvdXJjZSI+PC90ZXh0YXJlYT4NCjwvZmllbGRzZXQ+DQo8L2Rpdj4NCjxwIGlkPSJpZTYtZ28tYXdheSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij5JRTYuSXMgTk9UIHN1cHBvcnRlZC48L3A+DQo8YnIvPjxici8+DQo8L2JvZHk+PC9odG1sPg=='});});