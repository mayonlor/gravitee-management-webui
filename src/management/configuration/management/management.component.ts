/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import NotificationService from "../../../services/notification.service";
import PortalConfigService from "../../../services/portalConfig.service";
import { StateService } from '@uirouter/core';

const ManagementSettingsComponent: ng.IComponentOptions = {
  template: require('./management.html'),
  controller: function(
    NotificationService: NotificationService,
    PortalConfigService: PortalConfigService,
    $state: StateService,
    Constants: any
  ) {
    'ngInject';
    this.Constants = Constants;

    this.save = () => {
      PortalConfigService.save().then( () => {
        NotificationService.show("Configuration saved");
        this.formSettings.$setPristine();
      });
    };

    this.reset = () => {
      PortalConfigService.get().then((response) => {
        this.Constants = response.data;
        this.formSettings.$setPristine();
      });
    };
  }
};

export default ManagementSettingsComponent;
