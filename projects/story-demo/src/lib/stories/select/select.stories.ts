import { Story, Meta } from '@storybook/angular/types-6-0';
import { SelectComponent } from './select.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
    title: 'Basic/Select',
    component: SelectComponent,
    decorators: [
        moduleMetadata({
          imports: [
              CommonModule,
              BrowserAnimationsModule,
              NzSelectModule
            ],
        }),
      ],
  } as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
    component: SelectComponent,
    props: args,
});

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  label: '姓名',
  itemList: [
      'select1',
      'select2',
      'select3'
  ],
  size: 'small'
};
