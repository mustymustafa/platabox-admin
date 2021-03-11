import { Formik } from 'formik'
import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import {
  LightButton,
  PrimaryButton,
  SelectInput,
  Textarea,
  TextInput,
} from '../../../components'
import { CreateNotificationModel } from '../../../models/request'
import { notificationsStore } from '../../../stores'
import { appHistory, validateModel } from '../../../util'
import { NotificationType } from '../../../util/constants'
import { NotificationFormWrapper } from './notification-form-wrapper'

export const NotificationForm: React.FC = () => {
  return (
    <Formik
      validate={validateModel}
      validateOnMount
      validateOnChange
      initialValues={new CreateNotificationModel()}
      onSubmit={(model, { setSubmitting }) => {
        setSubmitting(true)
        notificationsStore.createNotification(model)
        setSubmitting(false)
        appHistory.replace('/')
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <NotificationFormWrapper handleSubmit={handleSubmit}>
          <header>
            <h1 className="heading">Create a Notification</h1>
            <h2 className="tagline">
              Provide the details for the notification below.
            </h2>
          </header>
          <main>
            <TextInput
              name="title"
              label="Title"
              placeholder="Promo"
              type="text"
            />
            <Textarea
              name="body"
              label="Body"
              placeholder="Get 50% off all deliveries today"
            />
            <SelectInput
              name="type"
              label="Type"
              options={[
                ['Driver', NotificationType.Driver],
                ['User', NotificationType.User],
              ]}
            />
          </main>
          <footer>
            <LightButton type="button" className="mr-3" disabled={isSubmitting}>
              <span>Cancel</span>
            </LightButton>
            <PrimaryButton type="submit" isLoading={isSubmitting}>
              <span className="mr-2">Send</span>
              <FiMessageSquare />
            </PrimaryButton>
          </footer>
        </NotificationFormWrapper>
      )}
    </Formik>
  )
}
