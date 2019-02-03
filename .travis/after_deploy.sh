#!/bin/bash

ssh web@85.143.223.101 'cd /home/web/www/td-deploybot/ && npm ci && npm start'
