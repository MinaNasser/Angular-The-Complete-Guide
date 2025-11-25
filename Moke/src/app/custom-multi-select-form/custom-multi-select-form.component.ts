import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../directives';
import { CustomAppErrorComponent } from '../custom-app-error/custom-app-error.component';
import { IComponentFormError, IDropdownOption } from '../../interfaces';
import { ComponentFormErrorConstant } from '../../enums';
import { NgStyle, NgClass } from '@angular/common';
import { LocalizePipe } from '../../pipes';
import { TranslationService } from '../../services';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'custom-multi-select-form',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideDirective,
    CustomAppErrorComponent,
    NgClass,
    LocalizePipe,
    TranslateModule
  ],
  templateUrl: './custom-multi-select-form.component.html',
  styleUrls: ['./custom-multi-select-form.component.css'],
})
export class CustomMultiSelectFormComponent {
  @Input({ required: true }) parentForm!: FormGroup;
  @Input({ required: true }) controlName!: string;
  @Input() label?: string;
  @Input() labelClass: string = '';
  @Input() dropdownOptionsClass: string = '';
  @Input() dropdownHeaderClass: string = '';
  @Input() dropdownContainerClass: string = '';
  @Input() placeholder: string = 'GENERAL.SELECT';
  @Input() enableFilter: boolean = false;
  @Input() filterDesign: boolean = false;
  @Input() showClear: boolean = true;
  @Input({ required: true }) options: IDropdownOption[] = [];
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) validation: IComponentFormError[] = [];
  @Input() height: string = '3.6em';

  isOpen: boolean = false;
  filteredOptions: IDropdownOption[] = [];
  customSelectedItems: IDropdownOption[] = [];
  filterText: string = '';
  @Input() disabled: boolean = false;
  @Input() disableToggle: boolean = false;

  @Input() chipsBelow: boolean = false;
  @Input() wrapShips: boolean = false;
  @Input() itemRemovable: boolean = true;
  @Input() showSerialWithName: boolean = true;
  @Input() showInactive: boolean = true;
  @Input() disableInactiveSelection: boolean = true;
  @Output() removedItems = new EventEmitter<IDropdownOption[]>();
  @Output() valueChange: EventEmitter<IDropdownOption[]> = new EventEmitter<
    IDropdownOption[]
  >();
  @Input() set selectedItems(editData: IDropdownOption[]) {
    if (editData?.length) {
      // Make sure these items are set as chips (customSelectedItems)
      this.customSelectedItems = [...editData];
      // Add them to the form control as well
      //const formValue = this.parentForm.get(this.controlName)?.value || [];
      const newValue = [ ...editData.map((item) => item.id)];
      this.parentForm.get(this.controlName)?.setValue(newValue);
    }
  }
translationService = inject(TranslationService)
translateService = inject(TranslateService)
  ngOnInit() {
    this.filteredOptions = [...this.options];
    // Initialize with current form value if any
    const currentValue = this.parentForm.get(this.controlName)?.value;
    if (currentValue && currentValue.length > 0) {
      // Ensure form control has array value
      if (!Array.isArray(currentValue)) {
        this.parentForm.get(this.controlName)?.setValue([]);
      }
    } else {
      this.parentForm.get(this.controlName)?.setValue([]);
    }

    if (this.disabled) {
      this.parentForm.controls[this.controlName].disable();
    }
  }

  get selectedOptions(): IDropdownOption[] {
    const value = this.parentForm.get(this.controlName)?.value || [];
    const selectedFromForm = this.options.filter((opt) =>
      value.includes(opt.id)
    );
    return [...selectedFromForm, ...this.customSelectedItems];
  }
  // getSelectedLabel(option: IDropdownOption): string {
  //   if (this.showSerialWithName) {
  //     if (option.nameEn && option.serialNumber) {
  //       return `${option.nameEn} / ${option.serialNumber}`;
  //     } else if (!option.nameEn && option.serialNumber) {
  //       return `${option.serialNumber}`;
  //     } else if (option.nameEn && !option.serialNumber) {
  //       return `${option.nameEn}`;
  //     } else {
  //       return 'No Name Available';
  //     }
  //   } else {
  //     return option.nameEn || option.serialNumber || 'No Name Available';
  //   }
  // }
  // getSelectedLabels(): string[] {
  //   return this.selectedOptions.map((opt) => opt.nameEn);
  // }
  getSelectedLabel(option: IDropdownOption): string {
const isEnglish = this.translationService.currentLang() === 'en';
console.log('isEnglish: ', isEnglish);
  const name = isEnglish ? option.nameEn : option.nameAr;
  const serial = option.serialNumber;

  if (this.showSerialWithName) {
    if (name && serial) return `${name} / ${serial}`;
    if (!name && serial) return `${serial}`;
    if (name && !serial) return `${name}`;
    return this.translateService.instant('GENERAL.NO_NAME_AVAILABLE');
  } else {
    return name || serial || this.translateService.instant('GENERAL.NO_NAME_AVAILABLE');
  }
}

getSelectedLabels(): string[] {
  const isEnglish = this.translationService.currentLang() === 'en';
  console.log('isEnglish: ', isEnglish);
  return this.selectedOptions.map(opt => isEnglish ? opt.nameEn : opt.nameAr);
}

  isSelected(id: any): boolean {
    const value = this.parentForm.get(this.controlName)?.value || [];
    return (
      value.includes(id) ||
      this.customSelectedItems.some((item) => item.id === id)
    );
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.filterText = '';
      this.filterOptions();
    } else {
      this.parentForm.get(this.controlName)?.markAsTouched();
    }
  }

  closeDropdown() {
    this.isOpen = false;
    this.parentForm.get(this.controlName)?.markAsTouched();
  }

  toggleOptionSelection(option: IDropdownOption) {
    const currentValue = this.parentForm.get(this.controlName)?.value || [];
    let newValue: any[];

    if (this.isSelected(option.id)) {
      newValue = currentValue.filter((id: any) => id !== option.id);
      // If the option is in custom chips (and removed), add it back to options
      if (!this.options.some((o) => o.id === option.id)) {
        this.customSelectedItems = this.customSelectedItems.filter(
          (item) => item.id !== option.id
        );
        this.options.push(option); // Add it back to the options list
        this.filteredOptions.push(option); // Add to filteredOptions
      }
    } else {
      newValue = [...currentValue, option.id];
      // If the option isn't in the options list, treat it as a custom chip
      if (!this.options.some((o) => o.id === option.id)) {
        this.customSelectedItems.push(option); // Add to custom chips
      }
    }

    this.parentForm.get(this.controlName)?.setValue(newValue);
    this.valueChange.emit(this.customSelectedItems);
  }

  clearSelection(event: Event) {
    event.stopPropagation();
    const selectedItems = this.parentForm.get(this.controlName)?.value || [];
    const customItemsToRemove = this.customSelectedItems.filter((item) =>
      selectedItems.includes(item.id)
    );

    // Remove the selected items from the form control (clearing selection)
    this.parentForm.get(this.controlName)?.setValue([]);

    // Add the custom items back to the options if not already there and remove them from customSelectedItems
    customItemsToRemove.forEach((removedItem) => {
      if (!this.options.some((option) => option.id === removedItem.id)) {
        this.options.push(removedItem);
        this.filteredOptions.push(removedItem);
      }
      this.customSelectedItems = this.customSelectedItems.filter(
        (item) => item.id !== removedItem.id
      );
    });
    if (customItemsToRemove.length > 0) {
      this.removedItems.emit(customItemsToRemove);
    }
    this.valueChange.emit(this.customSelectedItems);
  }

  filterOptions() {
    if (!this.filterText) {
      this.filteredOptions = [...this.options];
    } else {
      const searchText = this.filterText.toLowerCase();
      this.filteredOptions = this.options.filter((option) =>
        option.nameEn.toLowerCase().includes(searchText)
      );
    }
  }

  @Input() set reset(value: boolean) {
    if (value) {
      this.parentForm.get(this.controlName)?.setValue([]);
      this.filterText = '';
      this.filterOptions();
    }
  }

  containRequiredError() {
    return this.validation.some((error) =>
      error.errorType.includes(ComponentFormErrorConstant.REQUIRED)
    );
  }
  removeSelected(id: string | number): void {
    const current = this.parentForm.get(this.controlName)?.value || [];
    this.parentForm
      .get(this.controlName)
      ?.setValue(current.filter((x: any) => x !== id));
  }
  removeSelectedChip(id: string | number): void {
    const current = this.parentForm.get(this.controlName)?.value || [];
    this.parentForm
      .get(this.controlName)
      ?.setValue(current.filter((x: any) => x !== id));
    const chipIndex = this.customSelectedItems.findIndex(
      (chip) => chip.id === id
    );
    if (chipIndex > -1) {
      const removedChip = this.customSelectedItems.splice(chipIndex, 1)[0];
      this.options.push(removedChip);
      this.filteredOptions.push(removedChip);
      this.removedItems.emit([removedChip]);
    }

    this.valueChange.emit(this.customSelectedItems);
  }
}
